import Card from "../Card/Card";
import styled from "styled-components";

export default function CardList({ notes, onDeleteNote }) {
  return (
    <>
      <StyledCardList>
        {notes.map((note) => (
          <Card
            key={note.id}
            note={note.note}
            author={note.author}
            id={note.id}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </StyledCardList>
    </>
  );
}

const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 0.5rem;
`;
