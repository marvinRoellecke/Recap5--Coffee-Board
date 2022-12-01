import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Form from "../components/Form/Form";
import { useState } from "react";

export default function HomePage() {
  const [notes, setNotes] = useState([
    { note: "Custom Hooks", author: "Alex" },
    { note: "Styled Components", author: "Merle" },
    { note: "Next.js", author: "Thomas" },
  ]);

  function handleCreateNewNote(newNote) {
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return (
    <>
      <Header />
      <CardList notes={notes} />
      <Form onCreateNewNote={handleCreateNewNote} />
    </>
  );
}
