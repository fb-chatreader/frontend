import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShareBook from './ShareBook';
import SampleImage from '../../assets/girl-boss-cover.jpg';
import BookPage from './BookPage';
import styles from '../../scss/components/BookCard.module.scss';

function BookCard(props) {
  return (
    <div className={styles.bookCard}>
      <Link to={`/browse/book/${props.book.id}`} className={styles.header}>
        <img className={styles.bookImage} src={SampleImage} alt="book-cover" />
        <h2 className={styles.titleText}>{props.book.title}</h2>
      </Link>
      <div className={styles.footer}>
        <h4 className={styles.authorText}>By {props.book.author}</h4>
        <button
          onClick={() =>
            window.open(`${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.book.id}`)}
        >
          Read Summary Now!
        </button>
        <ShareBook data={props} />
      </div>
    </div>
  );
}

export default BookCard;
