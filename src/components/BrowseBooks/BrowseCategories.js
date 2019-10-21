import React, { useContext, useEffect, useState, useParams } from 'react';
import { BookContext } from 'Providers/BooksProvider.js';
import BookCategories from './BookCategories';
import BookGrid from './BooksGrid';
import styles from '../../scss/components/BrowseCats.module.scss';

const BrowseCategories = (props) => {
  console.log(props);
  const { categories } = props;
  const { books } = props.data;
  const [ selected, setSelected ] = useState(null);
  return (
    <div className={styles.browseCatsContainer}>
      <BookCategories books={books} categories={categories} selected={selected} setSelected={setSelected} />
      {selected ? (
        <div className={styles.gridContainer}>
          <BookGrid books={books} selected={selected} />
        </div>
      ) : (
        <p className={styles.placeholder}>Please select a genre to continue</p>
      )}
    </div>
  );
};

export default BrowseCategories;
