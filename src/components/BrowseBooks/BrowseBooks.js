import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';

import BrowseCategories from './BrowseCategories';
import styles from '../../scss/components/BrowseBooks.module.scss';

function BrowseBooks(props) {
  const [ state, dispatch ] = useContext(BookContext);
  const [ categories, setCategories ] = useState([]);
  const [ books, setBooks ] = useState([]);

  console.log('state in Browse Books');
  console.log('state in Browse Books');
  console.log('state in Browse Books');
  console.log('state in Browse Books');
  console.log(state);

  useEffect(
    () => {
      if (!state.books || !state.books.length) {
        axios.get('/api/books/').then((res) => {
          setCategories(Array.from(new Set(res.data.map(({ category }) => category))).sort());
          dispatch(
            { type: 'POPULATE_BOOKS', payload: res.data },
            {
              type: 'POPULATE_CATEGORIES',
              payload: categories
            }
          );
        });
      }
    },
    [ state.books, state.categories, dispatch ]
  );

  return (
    <div className={styles.browseBooks}>
      {categories && <BrowseCategories categories={categories} books={state.books} />}
    </div>
  );
}

export default BrowseBooks;
