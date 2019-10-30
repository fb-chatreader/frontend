import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import BookCard from './BookCard';

import { BookContext } from 'Providers/BooksProvider';

import styles from '../styles/Routes.module.scss';

function BookList(props) {
  const [state] = useContext(BookContext)();
  const { category: catParam } = useParams();
  const category = catParam ? catParam.split('_').join(' ') : null;

  return (
    <div className={styles.gridContainer}>
      {!props.empty &&
        state.books[category] &&
        state.books[category].map(b => <BookCard key={b.id} book={b} />)}
      {props.empty && <p>Please select a category to continue!</p>}
    </div>
  );
}

export default BookList;
