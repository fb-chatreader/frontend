import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from 'Providers/BooksProvider';
// import { Link } from 'react-router-dom';
import ShareBook from './ShareBook';
import styles from '../styles/SingleBookPage.module.scss';

const SingleBookPage = () => {
  const [state] = useContext(BookContext)();
  const id = parseInt(useParams().id, 10);
  const book = state.books.find(b => b.id === id);

  useEffect(() => {
    window.location = `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${id}`;
  }, []);

  return book ? (
    <div className={styles.SingleBookPage}>
      <div className={styles.header}>
        <img
          className={styles.bookImage}
          src={book.image_url}
          alt="book-cover"
        />
        <h2 className={styles.titleText}>{book.title}</h2>
      </div>

      <div className={styles.footer}>
        <h4 className={styles.authorText}>By {book.author}</h4>
        <div className={styles.contentSection}>
          <p className={styles.authorText}>{book.synopsis}</p>
        </div>
        <div className={styles.cardActions}>
          <div className={styles.summaryBtn}>
            <button
              onClick={() =>
                window.open(
                  `${process.env.REACT_APP_MESSENGER_URL}?ref=book_id=${book.id}`
                )
              }
            >
              Read Summary!
            </button>
          </div>
          <ShareBook book_id={book.id} />
        </div>
      </div>
    </div>
  ) : (
    <p>No book found</p>
  );
};

export default SingleBookPage;
