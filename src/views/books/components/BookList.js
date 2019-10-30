import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from 'Providers/BooksProvider';

import BookCard from './BookCard';

import styles from '../styles/BookList.module.scss';

function BookList() {
  const [state] = useContext(BookContext)();
  const { category: catParam } = useParams();
  const category = catParam ? catParam.split('_').join(' ') : null;
  console.log('CATEGORY: ', category);
  return (
    <div className={styles.browseBooks}>
      <div className={styles.gridContainer}>
        {state.books
          .filter(b => b.category === category)
          .map(b => (
            <BookCard key={b.id} book={b} />
          ))}
        {!state.selected && <p>Please select a category to continue!</p>}
      </div>
    </div>
  );
}

export default BookList;
