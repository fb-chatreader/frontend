import React from 'views/browse/categories/components/node_modules/react';
import { Link } from 'views/browse/categories/components/node_modules/react-router-dom';
import ShareBook from './ShareBook';
import SampleImage from '../../../../assets/girl-boss-cover.jpg';
import styles from './styles/BookCardListItem.module.scss';

function BookCardListItem(props) {
  return (
    <div className={styles.bookCard}>
      <Link to={`/summary/${props.book.id}`} className={styles.header}>
        <img className={styles.bookImage} src={props.book.image_url} alt="book-cover" />
        <h2 className={styles.titleText}>{props.book.title}</h2>
      </Link>
      <div className={styles.footer}>
        <h4 className={styles.authorText}>By {props.book.author}</h4>
        <div className={styles.cardActions}>
          <div className={styles.summaryBtn}>
            <button
              onClick={() =>
                window.open(`${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.book.id}`)}
            >
              Read Summary!
            </button>
          </div>
          <ShareBook data={props} />
        </div>
      </div>
    </div>
  );
}

export default BookCardListItem;
