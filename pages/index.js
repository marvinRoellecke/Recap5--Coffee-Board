import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Form from "../components/Form/Form";
import { useState } from "react";
import styled from "styled-components";

const initialNotes = [
  { id: 1, note: "Custom Hooks", author: "Alex" },
  { id: 2, note: "Styled Components", author: "Merle" },
  { id: 3, note: "Next.js", author: "Thomas" },
];

export default function HomePage() {
  const [notes, setNotes] = useState(initialNotes);

  function handleCreateNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <>
      <Header />
      <StyledMain>
        <CardList notes={notes} onDeleteNote={handleDeleteNote} />
      </StyledMain>
      <Form onCreateNewNote={handleCreateNewNote} />
    </>
  );
}

const StyledMain = styled.main`
  overflow-y: scroll;
`;
