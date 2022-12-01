import styled from "styled-components";

export default function Card({ note, author, id, onDeleteNote }) {
  return (
    <>
      <StyledCard>
        <h2>{note}</h2>
        <p>{author}</p>
        <button
          type="button"
          onClick={() => {
            onDeleteNote(id);
          }}
        >
          delete note
        </button>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.article`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 90%;
  padding: 10px;
`;
