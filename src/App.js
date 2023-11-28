import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useEffect, useContext } from "react";
import BooksContext from "./context/books";

function App() {
  const { FetchBooks } = useContext(BooksContext);
  useEffect(() => {
    FetchBooks();
  }, [FetchBooks]);

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}

export default App;
