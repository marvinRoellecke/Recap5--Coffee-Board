import Card from "../Card/Card";

export default function CardList({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <Card key={note.author} />
      ))}
    </>
  );
}
