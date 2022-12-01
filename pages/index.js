import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Form from "../components/Form/Form";
import { useState } from "react";
import styled from "styled-components";

const initialNotes = [
  { note: "Custom Hooks", author: "Alex" },
  { note: "Styled Components", author: "Merle" },
  { note: "Next.js", author: "Thomas" },
];

export default function HomePage() {
  const [notes, setNotes] = useState(initialNotes);

  function handleCreateNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  return (
    <>
      <Header />
      <StyledMain>
        <CardList notes={notes} />
      </StyledMain>
      <Form onCreateNewNote={handleCreateNewNote} />
    </>
  );
}

const StyledMain = styled.main`
  overflow-y: scroll;
`;
