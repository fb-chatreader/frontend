import React, { useContext } from 'react';
import { BookContext } from 'Providers/BooksProvider';

import CategoryMenu from './CategoryMenu';
import BookCard from './BookCard';

import styles from '../styles/BrowseBooks.module.scss';

function BrowseBooks() {
  const [state] = useContext(BookContext)();
  return (
    <div className={styles.browseBooks}>
      <CategoryMenu />

      <div className={styles.gridContainer}>
        {state.selected &&
          state.books
            .filter(b => b.category === state.selected)
            .map(b => <BookCard key={b.id} book={b} />)}
        {!state.selected && <p>Please select a category to continue!</p>}
      </div>
    </div>
  );
}

export default BrowseBooks;
