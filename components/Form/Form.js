import styled from "styled-components";

export default function Form({ onCreateNewNote }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const note = form.note.value;
    const author = form.author.value;

    const newNote = {
      note: note,
      author: author,
    };

    onCreateNewNote(newNote);
    event.target.reset();
    form.note.focus();
  }

  return (
    <StyledFooter>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="note"></label>
        <StyledInput type="text" id="note" name="note" required></StyledInput>
        <label htmlFor="author"></label>
        <StyledInput
          type="text"
          id="author"
          name="author"
          required
        ></StyledInput>
        <StyledButton type="submit">+</StyledButton>
      </StyledForm>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledInput = styled.input`
  height: 7rem;
  width: 35%;
`;

const StyledButton = styled.button`
  height: 7rem;
  width: 7rem;
`;
