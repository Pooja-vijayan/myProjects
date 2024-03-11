import React from 'react'; // Import React
import { useClient } from 'next/client';
import { useState } from 'react'; // Import useState
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../redux/actions/bookActions';

const BookForm = ({ onClose, book }) => {
  const [formData, setFormData] = useState({
    name: book ? book.name : '',
    price: book ? book.price : '',
    category: book ? book.category : '',
    description: book ? book.description : '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      dispatch(updateBook({ ...formData, id: book.id }));
    } else {
      dispatch(addBook({ ...formData, id: Date.now().toString() }));
    }
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>{book ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">{book ? 'Update' : 'Add'}</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default useClient(BookForm) ;