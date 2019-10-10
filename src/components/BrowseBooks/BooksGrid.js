import React from 'react';
import BookCard from './BookCard';

import styles from '../../scss/components/BookCard.module.scss';

function BooksGrid(props) {
    return (
        props.books
            .filter(b => b.category === props.selected)
            .sort((a, b) => b.rating_qty - a.rating_qty)
            .map(b => {
                return (
                    <div key={b.id}>
                        <BookCard book={b}/>
                    </div>
                );
            })
    );
}

export default BooksGrid;