import React, { useContext, memo } from 'react';
import { useParams } from 'react-router-dom';
import socialMetaTags from '../../../util/share/socialShareMetaTags';
import BookCard from './BookCard';

import { BookContext } from 'Providers/BooksProvider';

import styles from '../styles/BookList.module.scss';

function BookList(props) {
  const [ state ] = useContext(BookContext)();
  const { category: catParam } = useParams();
  const category = catParam ? catParam.split('_').join(' ') : null;
 

  return (
    <div className={styles.gridContainer}>
      {!props.empty && state.books.filter((b) => b.category === category).map((b) => <BookCard key={b.id} book={b} />)}
      {props.empty && (
        <div className={styles.emptyContainer}>
          <p className={styles.empty}>Please select a category to continue!</p>
        </div>
      )}
    </div>
  );
}

export default memo(BookList);
