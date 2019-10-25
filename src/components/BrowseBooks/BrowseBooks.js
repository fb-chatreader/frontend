import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { BookContext } from 'Providers/BooksProvider.js';

import BrowseCategories from './BrowseCategories';
import styles from '../../scss/components/BrowseBooks.module.scss';

function BrowseBooks() {
  const [state, dispatch] = useContext(BookContext)();

  useEffect(() => {
    if (!state.books || !state.books.length) {
    }
  }, [state.books, state.categories, dispatch]);

  return (
    <Route exact path="/browse">
      <div className={styles.browseBooks}>
        {state.categories && (
          <BrowseCategories categories={state.categories} books={state.books} />
        )}
      </div>
    </Route>
  );
}

export default BrowseBooks;
