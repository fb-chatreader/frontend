import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { BookContext } from 'Providers/BooksProvider.js';
import BooksGrid from './BooksGrid';

import styles from '../../scss/components/BrowseBooks.module.scss';

function BrowseBooks(props) {
  const [state, dispatch] = useContext(BookContext);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!state.books || !state.books.length) {
      axios.get('/api/books/').then(res => {
        console.log(res.data);
        setCategories(
          Array.from(new Set(res.data.map(({ category }) => category))).sort()
        );
        dispatch({ type: 'POPULATE_BOOKS', payload: res.data });
      });
    }
  }, [state.books, dispatch]);
  
  return (
    <div>
      <ul>
        <li>Genres</li>
        {categories.map(category => (
          <li
            key={category}
            onClick={e => setSelected(category)}
            style={{
              backgroundColor:
                selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
            }}
          >
            {category} (
            {state.books.filter(b => b.category === category).length})
          </li>
        ))}
      </ul>
      {selected ? (
        <div className={styles['booksGridContainer']}>
          <BooksGrid books={state.books} selected={selected} />
        </div>
      ) : (
        <p>Please select a genre to continue</p>
      )}
    </div>
  );
}

export default BrowseBooks;
