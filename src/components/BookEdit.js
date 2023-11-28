import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const { EditBookById } = useBooksContext();
  const [title, settitle] = useState(book.title);

  const handleChange = (event) => {
    settitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    EditBookById(book.id, title);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={handleChange}
          />
          <button className="button is-primary">Edit</button>
        </form>
      </div>
    </>
  );
}

export default BookEdit;
