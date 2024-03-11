// pages/index.js
import { useClient } from 'next/client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const BookForm = dynamic(() => import('./components/BookForm'), { ssr: false });
const BookList = dynamic(() => import('./components/BookForm'), { ssr: false });


const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const books = useSelector((state) => state.books);

  const handleAddBook = () => {
    setShowForm(true);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setSelectedBook(null);
    setShowForm(false);
  };

  return (
    <div>
      <h1>My Bookstore</h1>
      <button onClick={handleAddBook}>Add Book</button>
      <BookList books={books} onEdit={handleEditBook} />
      {showForm && (
        <BookForm onClose={handleCloseForm} book={selectedBook} />
      )}
    </div>
  );
};

export default useClient(Home);
