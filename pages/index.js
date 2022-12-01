import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Form from "../components/Form/Form";
import { useState } from "react";
import styled from "styled-components";

const initialNotes = [
  { id: 1, text: "Custom Hooks", name: "Alex" },
  { id: 2, text: "Styled Components", name: "Merle" },
  { id: 3, text: "Next.js", name: "Thomas" },
];

export default function HomePage() {
  const [notes, setNotes] = useState(initialNotes);

  function handleCreateNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleEditedNote(editedNote, id) {
    setNotes(
      notes.map((note) =>
        id === note.id
          ? { ...note, text: editedNote.text, name: editedNote.name }
          : note
      )
    );
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
      <Form onCreateNewNote={handleCreateNewNote} />
    </>
  );
}

const StyledMain = styled.main`
  overflow-y: scroll;
`;
