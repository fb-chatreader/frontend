import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SingleBook from './SingleBook';
import TitlesMenu from './TitlesMenu';
import { BookContext } from 'Providers/BooksProvider.js';
import styles from '../../scss/components/BookPage.module.scss';
const BookPage = () => {
  const { id } = useParams();
  const [ state ] = useContext(BookContext);
  const _id = parseInt(id);
  const books = [ ...state.books ];
  const book = books.find((e, i) => {
    if (books[i].id === _id) {
      return books[i];
    }
  });

  return (
    <div className={styles.bookPageContainer}>
      <TitlesMenu data={state} />
      <SingleBook book={book} />
    </div>
  );
};

export default BookPage;
