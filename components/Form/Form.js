import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Form({ onCreateNewNote }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const note = form.note.value;
    const author = form.author.value;

    const newNote = {
      note: note,
      author: author,
      id: nanoid(),
    };

    onCreateNewNote(newNote);
    event.target.reset();
    form.note.focus();
  }

  return (
    <StyledFooter>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="note"></label>
        <StyledInput
          type="text"
          id="note"
          name="note"
          placeholder="Type your thoughts..."
          required
        ></StyledInput>
        <label htmlFor="author"></label>
        <StyledInput
          type="text"
          id="author"
          name="author"
          placeholder="Your Name"
          required
        ></StyledInput>
        <StyledButton type="submit">+</StyledButton>
      </StyledForm>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #433633;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const StyledInput = styled.input`
  height: 7rem;
  padding: 1rem;
  width: 35%;
  background: none;
  color: grey;
  border: none;
  font-size: 1rem;
  box-shadow: inset -8px -8px 16px rgba(255, 255, 255, 0.25),
    inset 8px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &::placeholder {
    color: white;
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  height: 7rem;
  width: 7rem;
  font-size: 3rem;
  background: none;
  color: white;
  border-radius: 10px;
`;
