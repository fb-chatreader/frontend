import React, { useState } from 'react';
import CategoryMenu from './CategoryMenu';
import BooksGrid from './BooksGrid';
import styles from '../../scss/components/BrowseCats.module.scss';

const BrowseCategories = (props) => {
  const { books, categories } = props;
  const [ selected, setSelected ] = useState(null);

  return (
    <div className={styles.browseCatsContainer}>
      <CategoryMenu books={books} categories={categories} selected={selected} setSelected={setSelected} />
      {selected ? (
        <div className={styles.gridContainer}>
          <BooksGrid books={books} selected={selected} />
        </div>
      ) : (
        <p className={styles.placeholder}>Please select a category to continue</p>
      )}
    </div>
  );
};

export default BrowseCategories;
