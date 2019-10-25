import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/components/BookPage.module.scss';

const TitlesMenu = ({ state }) => {
  return (
    <div className={styles.titlesMenuContainer}>
      {state.books && state.selectedCategory ? (
        state.books
          .filter(b => b.category === state.selectedCategory)
          .sort((a, b) => b.rating_qty - a.rating_qty)
          .map(b => <Link to={`/summary/${b.id}`}>{b.title}</Link>)
      ) : (
        <p>Loading titles...</p>
      )}
    </div>
  );
};

export default TitlesMenu;
