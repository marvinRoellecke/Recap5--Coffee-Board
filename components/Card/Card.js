import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";

import { useState } from "react";

export default function Card({ text, name, id, onDeleteNote, onEditedNote }) {
  function handleSaveChanges(event) {
    event.preventDefault();
    const form = event.target.elements;
    const editedText = form.text.value;
    const editedName = form.name.value;

    const editedNote = {
      text: editedText,
      name: editedName,
      id: id,
    };

    onEditedNote(editedNote, id);
    setIsEditing(false);

    event.target.reset();
  }

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <StyledCard>
        {!isEditing && (
          <section>
            <h2>{text}</h2>
            <p>{name}</p>

            <StyledTrashButton
              type="button"
              onClick={() => {
                onDeleteNote(id);
              }}
            >
              <AiFillDelete />
            </StyledTrashButton>
            <StyledEditButton
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <AiFillEdit />
            </StyledEditButton>
          </section>
        )}
        {isEditing && (
          <form onSubmit={handleSaveChanges}>
            <label htmlFor="text"></label>
            <StyledEditInput
              type="text"
              id="text"
              name="text"
              defaultValue={text}
              required
            ></StyledEditInput>
            <label htmlFor="name"></label>
            <StyledEditInput
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              required
            ></StyledEditInput>
            <StyledSaveButton type="submit">
              <AiFillCheckSquare />
            </StyledSaveButton>
          </form>
        )}
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

const StyledEditInput = styled.input`
  height: 4rem;
  width: 40%;
`;

const StyledEditButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const StyledSaveButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
