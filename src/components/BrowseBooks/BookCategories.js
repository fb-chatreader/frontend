import React, { useContext, useEffect, useState, useParams } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { BookContext } from 'Providers/BooksProvider.js';
import BooksGrid from './BooksGrid';
import BookPage from './BookPage';
import styles from '../../scss/components/CategoryMenu.module.scss';

const BookCategories = (props) => {
  console.log(props);
  const { books, categories, selected, setSelected } = props;

  // const { categories, setCategories } = useState([]);

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
