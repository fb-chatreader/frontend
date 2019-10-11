import React from 'react';
import SampleImage from '../../assets/girl-boss-cover.jpg';
import styles from '../../scss/components/BookCard.module.scss';

function BookCard(props) {
    return (
        <div className={styles.bookCard}>
            <div className={styles.header}>
                <img className={styles.bookImage} src={SampleImage} alt='book-cover' />
                <h2 className={styles.titleText}>{props.book.title}</h2>
            </div>
            <div className={styles.footer}>
                <h4 className={styles.authorText}>By {props.book.author}</h4>
                <button
                    onClick={() =>
                    window.open(
                        `${process.env.REACT_APP_MESSENGER_URL}?ref=command=start_book,book_id=${props.book.id}`
                    )
                    }
                >
                    Read Summary Now!
                </button>
            </div>
        </div>
    );
}

export default BookCard;