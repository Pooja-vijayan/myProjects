import { useEffect, useState } from 'react';
import { useClient } from 'next/client';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/bookActions';

const BookList = () => {
  const [initialized, setInitialized] = useState(false);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialized(true);
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (!initialized) {
    return null; // Render nothing during server-side rendering
  }

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} - {book.price} - {book.category}
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default useClient(BookList);
