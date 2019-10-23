import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';

import BrowseCategories from './BrowseCategories';
import styles from '../../scss/components/BrowseBooks.module.scss';

function BrowseBooks() {
  const [ state, dispatch ] = useContext(BookContext);

  useEffect(
    () => {
      if (!state.books || !state.books.length) {
        axios.get('/api/books/').then((res) => {
          const categories = Array.from(new Set(res.data.map(({ category }) => category))).sort();
          dispatch({ type: 'POPULATE_BOOKS', payload: res.data });
          dispatch({
            type: 'POPULATE_CATEGORIES',
            payload: categories
          });
        });
      }
    },
    [ state.books, state.categories, dispatch ]
  );
  
  return (
    <div className={styles.browseBooks}>
      <Route exact path="/browse">
        {state.categories && <BrowseCategories categories={state.categories} books={state.books} />}
      </Route>
    </div>
  );
}

export default BrowseBooks;
