import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleBook from './SingleBook';
import TitlesMenu from './TitlesMenu';
import { BookContext } from 'Providers/BooksProvider.js';
import styles from '../../scss/components/BookPage.module.scss';

const BookPage = () => {
  const [state] = useContext(BookContext)();

  const { id } = useParams();
  const book = state.books.find(b => b.id === parseInt(id, 10));

  return state.books.length && state.categories.length ? (
    <div className={styles.bookPageContainer}>
      <TitlesMenu state={state} />
      <SingleBook book={book} />
    </div>
  ) : (
    <p>Loading BookPage...</p>
  );
};

export default BookPage;
