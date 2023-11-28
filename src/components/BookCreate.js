import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, settitle] = useState("");
  const { CreateBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateBook(title);
    settitle("");
  };

  const onInputChange = (event) => {
    settitle(event.target.value);
  };

  return (
    <>
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input className="input" value={title} onChange={onInputChange} />
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default BookCreate;
