import React, { useContext, useEffect, useState, useParams } from 'react';
import { BookContext } from 'Providers/BooksProvider.js';
import BookCategories from './BookCategories';
import BookGrid from './BooksGrid';
import styles from '../../scss/components/BooksGrid.module.scss';

const BrowseCategories = (props) => {
  console.log(props);
  const { categories } = props;
  const { books } = props.data;
  const [ selected, setSelected ] = useState(null);
  return (
    <div>
      CATS
      <BookCategories books={books} categories={categories} selected={selected} setSelected={setSelected} />
      {selected ? (
        <div className={styles['booksGridContainer']}>
          <BookGrid books={books} selected={selected} />
        </div>
      ) : (
        <p>Please select a genre to continue</p>
      )}
    </div>
  );
};

export default BrowseCategories;
