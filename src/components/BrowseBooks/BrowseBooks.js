import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';

import BrowseCategories from './BrowseCategories';
import styles from '../../scss/components/BrowseBooks.module.scss';

function BrowseBooks(props) {
  const [state, dispatch] = useContext(BookContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!state.books || !state.books.length) {
      axios.get('/api/books/').then(res => {
        setCategories(
          Array.from(new Set(res.data.map(({ category }) => category))).sort()
        );
        dispatch({ type: 'POPULATE_BOOKS', payload: res.data });
        dispatch({
          type: 'POPULATE_CATEGORIES',
          payload: categories
        });
      });
    }
  }, [state.books, categories, dispatch]);

  return (
    <div className={styles.browseBooks}>
      <Route exact path="/browse">
        {categories && (
          <BrowseCategories categories={categories} books={state.books} />
        )}
      </Route>
    </div>
  );
}

export default BrowseBooks;
