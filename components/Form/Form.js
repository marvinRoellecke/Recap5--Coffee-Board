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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="note"></label>
        <input type="text" id="note" name="note" required></input>
        <label htmlFor="author"></label>
        <input type="text" id="author" name="author" required></input>
        <button type="submit">+</button>
      </form>
    </>
  );
}
