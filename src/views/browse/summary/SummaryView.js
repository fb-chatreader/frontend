import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Summary from './components/Summary';
import TitlesSidebarMenu from './components/TitlesSidebarMenu';
import { BookContext } from '../../../Providers/BooksProvider';
import styles from './SummaryView.module.scss';

const SummaryView = () => {
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

  return state.books.length && state.categories.length ? (
    <div className={styles.bookPageContainer}>
      <TitlesSidebarMenu data={state} books={books} selectedCategory={book.category} />
      <Summary book={book} />
    </div>
  ) : (
    <p>Loading BookPage...</p>
  );
};

export default SummaryView;
