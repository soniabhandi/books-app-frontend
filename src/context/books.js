import { createContext, useCallback } from "react";
import axios from "axios";
import { useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setbooks] = useState([]);

  const FetchBooks = useCallback(async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setbooks(response.data);
  }, []);

  const EditBookById = async (id, newTitle) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setbooks(updatedBooks);
  };

  const DeleteBookById = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setbooks(updatedBooks);
  };

  const CreateBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title: title,
    });
    console.log(response);
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 20), title: title },
    ];
    setbooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    FetchBooks: FetchBooks,
    EditBookById,
    CreateBook,
    DeleteBookById, //in js if key and val has same name - we can write it only once
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
