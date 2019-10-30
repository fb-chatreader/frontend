import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SideMenu from './SideMenu';
import { BookContext } from 'Providers/BooksProvider';
import styles from '../styles/Summary.module.scss';

const SummaryView = () => {
  const [state] = useContext(BookContext)();
  const id = parseInt(useParams().id, 10);
  let book;

  for (let cat in state.books) {
    const found = state.books[cat].find(b => b.id === id);

    if (found) {
      book = found;
      break;
    }
  }

  return book ? (
    <div className={styles.bookViewContainer}>
      <SideMenu books={state.books[book.category]} />

      <div className={styles.summaryContainer}>
        <div>{book.title}</div>
        <div>{book.author}</div>
        <div>{book.synopsis}</div>
      </div>
    </div>
  ) : (
    <p>Cannot find that book</p>
  );
};

export default SummaryView;
