import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from './types';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id,
});
  
export const updateBook = (book) => ({
type: UPDATE_BOOK,
payload: book,
});