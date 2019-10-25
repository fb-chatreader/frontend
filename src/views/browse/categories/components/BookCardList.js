import React from 'views/browse/categories/components/node_modules/react';
import BookCardListItem from './BookCardListItem';
import styles from '../styles/BookCardList.module.scss';

function BookCardList(props) {
  return (
    <div className={styles.booksGrid}>
      {props.books.filter((b) => b.category === props.selected).sort((a, b) => b.rating_qty - a.rating_qty).map((b) => {
        return (
          <div className={styles.gridItem} key={b.id}>
            <BookCardListItem book={b} />
          </div>
        );
      })}
    </div>
  );
}

export default BookCardList;
