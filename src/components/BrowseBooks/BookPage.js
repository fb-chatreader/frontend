import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleBook from './SingleBook';
import TitlesMenu from './TitlesMenu';
import { BookContext } from 'Providers/BooksProvider.js';
import styles from '../../scss/components/BookPage.module.scss';

const BookPage = () => {
  const [ state, dispatch ] = useContext(BookContext);

  const { id } = useParams();
  const _id = parseInt(id);

  const books = [ ...state.books ];
  // const books = state.books;
  const book = books.find((e, i) => {
    if (books[i].id === _id) {
      return books[i];
    }
  });

  // useEffect(
  //   () => {
  //     if (state.books && state.categories && !state.selectedCategory) {
  //       dispatch({ 
  //         type: 'SELECTED_CATEGORY', 
  //         payload: book.category
  //       });
  //     }
  //   }, 
  //   [state.categories, state.selectedCategory, dispatch]
  // );

  // console.log('BookPage state.books:', books);

  return (
    (state.books.length && state.categories.length) ? (
      <div className={styles.bookPageContainer}>
        <TitlesMenu data={state} books={books} selectedCategory={book.category}/>
        <SingleBook book={book} />
      </div>
    ) : (
      <p>Loading BookPage...</p>
    )
  );
};

export default BookPage;
