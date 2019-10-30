import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SideMenu from './SideMenu';
import { BookContext } from 'Providers/BooksProvider';
import styles from '../styles/Summary.module.scss';

const SummaryView = () => {
  const [state] = useContext(BookContext)();
  const id = parseInt(useParams().id, 10);
  const book = state.books.find(b => b.id === id);

  return book ? (
    <div className={styles.bookViewContainer}>
      <SideMenu state={state} />

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
