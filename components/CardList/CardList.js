import Card from "../Card/Card";
import styled from "styled-components";

export default function CardList({ notes }) {
  return (
    <>
      <StyledCardList>
        {notes.map((note) => (
          <Card key={note.author} note={note.note} author={note.author} />
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
`;
