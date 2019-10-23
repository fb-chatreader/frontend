import React from 'react';
import styles from '../../scss/components/BookPage.module.scss';
const SingleBook = (props) => {
  return <div className={styles.singleBookContainer}>{props.book.title}</div>;
};

export default SingleBook;
