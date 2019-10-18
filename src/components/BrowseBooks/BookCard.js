import React from 'react';
import ShareBook from './ShareBook';
import styles from '../../scss/components/BookCard.module.scss';

function BookCard(props) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.header}>
        <img className={styles.bookImage} src={props.book.image_url} alt='book-cover' />
        <h2 className={styles.titleText}>{props.book.title}</h2>
      </div>
      <div className={styles.footer}>
        <h4 className={styles.authorText}>By {props.book.author}</h4>
        <div className={styles.cardActions}>
          <button className={styles.summaryBtn}
            type='button'
            onClick={() =>
              window.open(`${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.book.id}`)}
          >
            Read Summary!
          </button>
          <ShareBook data={props} />
        </div>
      </div>
    </div>
  );
}

export default BookCard;
