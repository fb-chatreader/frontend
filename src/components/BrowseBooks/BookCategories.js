import React, { useContext, useEffect, useState, useParams } from 'react';
import { Route, Link } from 'react-router-dom';
import { BookContext } from 'Providers/BooksProvider.js';
import styles from '../../scss/components/CategoryMenu.module.scss';

const BookCategories = (props) => {
  const { books, categories, selected, setSelected } = props;
  const [ state, dispatch ] = useContext(BookContext);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.genreMenu}>
        <h3>Genres</h3>
        <ul>
          {categories.map((category) => (
            <div
              className={styles.filterOption}
              key={category}
              onClick={(e) => setSelected(category)}
              style={{
                backgroundColor: selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
              }}
            >
              {category} ({books.filter((b) => b.category === category).length})
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookCategories;
