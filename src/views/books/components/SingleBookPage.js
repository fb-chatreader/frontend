import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import ShareBook from './ShareBook';
import styles from '../styles/BookCard.module.scss';

function SingleBookPage(props) {
    const [state] = useContext(BookContext)();
    const { bookId } = useParams();
    const book = state.books.filter(b => b.id === bookId);

    return (
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
            <div className={styles.cardActions}>
            <div className={styles.summaryBtn}>
                <button
                onClick={() =>
                    window.open(
                    `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${book.id}`
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
    );
}

export default SingleBookPage;
