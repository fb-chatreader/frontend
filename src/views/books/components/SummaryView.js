import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Summary from './components/Summary';
import TitlesSideMenu from './components/TitlesSidebarMenu';
import { BookContext } from '../../../Providers/BooksProvider';
import styles from './SummaryView.module.scss';

const SummaryView = () => {
  const [ state ] = useContext(BookContext);

  const { id } = useParams();
  const _id = parseInt(id);

  const books = [ ...state.books ];
  const book = books.find((e, i) => {
    if (books[i].id === _id) {
      return books[i];
    }
  });

  return state.books.length && state.categories.length ? (
    <div className={styles.bookPageContainer}>
      <TitlesSideMenu data={state} books={books} selectedCategory={book.category} />
      <Summary book={book} />
    </div>
  ) : (
    <p>Loading BookPage...</p>
  );
};

export default SummaryView;
