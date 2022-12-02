import styled from "styled-components";
import { nanoid } from "nanoid";
import { AiFillCheckSquare } from "react-icons/ai";

export default function Form({ onCreateNewNote }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const text = form.text.value;
    const name = form.name.value;

    const newNote = {
      text: text,
      name: name,
      id: nanoid(),
    };

    onCreateNewNote(newNote);
    event.target.reset();
    form.text.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="text"></label>
      <StyledInput
        type="text"
        id="text"
        name="text"
        placeholder="Type your thoughts..."
        required
      ></StyledInput>
      <label htmlFor="name"></label>
      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        required
      ></StyledInput>
      <StyledButton type="submit">+</StyledButton>
    </StyledForm>
  );
}

//{editForm ? <AiFillCheckSquare /> : + }

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const StyledInput = styled.input`
  height: 5rem;
  padding: 1rem;
  width: 35%;
  background: none;
  color: black;
  border: none;
  font-size: 1rem;
  border-radius: 10px;

  &::placeholder {
    color: grey;
    opacity: 1;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  height: 5rem;
  width: 5rem;
  font-size: 3rem;
  background: none;
  color: black;
  border-radius: 10px;
`;
