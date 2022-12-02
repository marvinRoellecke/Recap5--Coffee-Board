import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Form from "../components/Form/Form";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const noteList = await response.json();
    setNotes(noteList);
    console.log("rerender");
  }

  useEffect(() => {
    getNotes();
    const intervalID = setInterval(getNotes, 10000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  async function handleCreateNewNote(newNote) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      }
    );
    getNotes();
    // war vorher hier setNotes([...notes, newNote]);
  }

  async function handleDeleteNote(id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
    getNotes();
    // hat vorher hier gestanden setNotes(notes.filter((note) => note.id !== id));
  }

  async function handleEditedNote(editedNote, id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedNote),
      }
    );
    getNotes();
    /* 
   hat vorher hier gestanden
   setNotes(
      notes.map((note) =>
        id === note.id
          ? { ...note, text: editedNote.text, name: editedNote.name }
          : note
      )
    );*/
  }

  return (
    <>
      <Header />
      <StyledMain>
        <CardList
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onEditedNote={handleEditedNote}
        />
      </StyledMain>
      <StyledFooter>
        <Form onCreateNewNote={handleCreateNewNote} />
      </StyledFooter>
    </>
  );
}

const StyledMain = styled.main`
  overflow-y: scroll;
`;

const StyledFooter = styled.footer`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
