import React from 'react';
import styles from '../../scss/components/BookPage.module.scss';
const SingleBook = (props) => {
  return (
    <div className={styles.singleBookContainer}>
      <div>{props.book.title}</div>
      <div>{props.book.author}</div>
      <div>{props.book.synopsis}</div>
    </div>
  );
};

export default SingleBook;
