import Card from "../Card/Card";
import styled from "styled-components";

export default function CardList({ notes, onDeleteNote, onEditedNote }) {
  return (
    <>
      <StyledCardList>
        {notes.map((note) => (
          <Card
            key={note.id}
            text={note.text}
            name={note.name}
            id={note.id}
            onDeleteNote={onDeleteNote}
            onEditedNote={onEditedNote}
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
