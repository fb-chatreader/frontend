import React from 'views/browse/summary/components/node_modules/react';
import styles from '../styles/Summary.module.scss';
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
