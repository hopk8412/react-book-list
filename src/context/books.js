import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const resp = await axios.get('http://localhost:3001/books');
    setBooks(resp.data);
  }

  const createBook = async (book) => {
    const resp = await axios.post('http://localhost:3001/books', {
      title: book
    });
  setBooks([...books, resp.data]);
  };

  const deleteBookById = async (id) => {
    const resp = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, updatedTitle) => {
    const resp = await axios.put(`http://localhost:3001/books/${id}`, {
        title: updatedTitle
      });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...resp.data};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks
  };
    
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;