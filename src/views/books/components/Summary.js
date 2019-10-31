import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import SideMenu from './SideMenu';
import { BookContext } from 'Providers/BooksProvider';
import styles from '../styles/Summary.module.scss';

const SummaryView = () => {
  const [state] = useContext(BookContext)();
  const id = parseInt(useParams().id, 10);
  const book = state.books.find(b => b.id === id);
  let loadingText = 'Loading book...';

  setTimeout(() => (loadingText = 'Could not find that book'), 2000);
  return book ? (
    <div className={styles.bookPageContainer}>
      <SideMenu books={state.books.filter(b => b.category === book.category)} />

      <div className={styles.summaryContainer}>
        <div className={styles.header}>
          <div className={styles.title}>{book.title}</div>
          <div className={styles.author}>{book.author}</div>
        </div>
        <div className={styles.synopsis}>{book.synopsis}</div>
      </div>
    </div>
  ) : (
    <p>{loadingText}</p>
  );
};

export default SummaryView;
