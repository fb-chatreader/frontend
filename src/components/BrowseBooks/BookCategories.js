import React, { useContext, useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';
import BooksGrid from './BooksGrid';
import BookPage from './BookPage';
import styles from '../../scss/components/BrowseBooks.module.scss';

const BookCategories = (props) => {
  const { categories, setSelected, selected, books } = props;

  return (
    <div className={styles.menusContainer}>
      <div className={styles.genreMenu}>
        <h3>Genres</h3>
        <ul>
          {categories.map((category) => (
            <Link
              to="/browse/bookgrid"
              className={styles.filterOption}
              key={category}
              onClick={(e) => setSelected(category)}
              style={{
                backgroundColor: selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
              }}
            >
              {category} ({books.filter((b) => b.category === category).length})
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookCategories;
