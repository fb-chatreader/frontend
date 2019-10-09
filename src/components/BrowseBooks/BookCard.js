import React from 'react';

import styles from '../../scss/components/BookCard.module.scss';

function BookCard(props) {
    return (
        <div className={styles['bookCard']}>
            <h2>{props.book.title}</h2>
            <h4>By {props.book.author}</h4>
            <p>{props.book.synopsis}</p>
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
    );
}

export default BookCard