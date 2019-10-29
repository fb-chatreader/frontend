import React, { useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers/books.js';
import axios from 'axios';

export const BookContext = createContext();

export function BooksProvider(props) {
  const { Provider } = BookContext;

  const [state, dispatch] = useReducer(reducer, initialState);

  const getState = () => {
    if (!state.books.length) {
      console.log('Books API called in BooksProvider');
      axios
        .get('/api/books/')
        .then(res => {
          const books = res.data;
          const categories = Array.from(new Set(res.data.map(({ category }) => category))).sort();
          dispatch({ 
            type: 'POPULATE_BOOKS_AND_CATEGORIES', 
            payload: {
              books,
              categories
            } 
          });
        });
    }
    return [state, dispatch];
  };

  return <Provider value={getState}>{props.children}</Provider>;
}