import React from 'react';
import styles from '../styles/Summary.module.scss';
const Summary = (props) => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.bookTitle}>{props.book.title}</div>
      <div className={styles.bookAuthor}>{props.book.author}</div>
      <div className={styles.bookSynopsis}>{props.book.synopsis}</div>
    </div>
  );
};

export default Summary;
