import React from 'react';
import BookCard from './BookCard';
import styles from '../../scss/components/BooksGrid.module.scss';

function BooksGrid(props) {
    return (
        <div className={styles.booksGrid}>
        {props.books
            .filter(b => b.category === props.selected)
            .sort((a, b) => b.rating_qty - a.rating_qty)
            .map(b => {
                return (
                    <div className={styles.gridItem} key={b.id}>
                        <BookCard book={b}/>
                    </div>
                );
            })}
        </div>
    );
}

export default BooksGrid;