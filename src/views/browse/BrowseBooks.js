import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';

import CategoriesView from './categories/CategoriesView';
import styles from './BrowseBooks.module.scss';

function BrowseBooks() {
  const [ state ] = useContext(BookContext)();
  
  return (
    <Route exact path="/browse">
      <div className={styles.browseBooks}>
        {state.categories && <CategoriesView categories={state.categories} books={state.books} />}
      </div>
    </Route>
  );
}

export default BrowseBooks;
