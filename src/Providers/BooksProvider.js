import React, { useReducer, createContext } from 'react';
import { reducer, initialState } from './reducers/books.js';

export const BookContext = createContext();

export function BooksProvider(props) {
  const { Provider } = BookContext;

  return (
    <Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </Provider>
  );
}
