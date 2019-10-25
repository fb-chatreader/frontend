import React, { useReducer, createContext } from 'react';

import { reducer, initialState } from './reducers/books.js';
import axios from 'axios';

export const BookContext = createContext();

export function BooksProvider(props) {
  const { Provider } = BookContext;

  const [state, dispatch] = useReducer(reducer, initialState);

  const getState = () => {
    if (!state.books.length) {
      axios
        .get('/api/books/')
        .then(res => dispatch({ type: 'POPULATE_BOOKS', payload: res.data }));
    }

    return [state, dispatch];
  };

  return <Provider value={getState}>{props.children}</Provider>;
}
