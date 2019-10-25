import React from 'react';
import styles from '../styles/Summary.module.scss';
const Summary = (props) => {
  return (
    <div className={styles.singleBookContainer}>
      <div>{props.book.title}</div>
      <div>{props.book.author}</div>
      <div>{props.book.synopsis}</div>
    </div>
  );
};

export default Summary;
