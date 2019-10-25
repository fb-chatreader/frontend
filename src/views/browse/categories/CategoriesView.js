import React, { useState } from 'react';
import CategoryMenu from './components/CategorySidebarMenu';
import BookCardList from './components/BookCardList';
import styles from './CategoriesView.module.scss';

const CategoriesView = (props) => {
  const { books, categories } = props;
  const [ selected, setSelected ] = useState(null);

  return (
    <div className={styles.browseCatsContainer}>
      <CategoryMenu books={books} categories={categories} selected={selected} setSelected={setSelected} />
      {selected ? (
        <div className={styles.gridContainer}>
          <BookCardList books={books} selected={selected} />
        </div>
      ) : (
        <p className={styles.placeholder}>Please select a category to continue</p>
      )}
    </div>
  );
};

export default CategoriesView;
