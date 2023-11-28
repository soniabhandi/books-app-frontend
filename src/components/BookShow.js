import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const { DeleteBookById } = useBooksContext();

  const [showedit, setshowedit] = useState(false);

  const handleSubmit = () => {
    setshowedit(false);
  };

  const onHandleClick = () => {
    DeleteBookById(book.id);
  };

  const onHandleEdit = () => {
    setshowedit(!showedit);
  };
  let content = <h3>{book.title}</h3>;

  if (showedit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <>
      <div className="book-show">
        <img
          alt="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        {content}
        <div className="actions">
          <button className="edit" onClick={onHandleEdit} />
          <button className="delete" onClick={onHandleClick} />
        </div>
      </div>
    </>
  );
}

export default BookShow;
