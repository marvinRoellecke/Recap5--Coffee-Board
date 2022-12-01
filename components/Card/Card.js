import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export default function Card({ note, author, id, onDeleteNote }) {
  return (
    <>
      <StyledCard>
        <h2>{note}</h2>
        <p>{author}</p>
        <StyledTrashButton
          type="button"
          onClick={() => {
            onDeleteNote(id);
          }}
        >
          <AiFillDelete />
        </StyledTrashButton>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.article`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 90%;
  padding: 10px;
  position: relative;
`;

const StyledTrashButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
