import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { BookContext } from 'Providers/BooksProvider';

import styles from '../styles/CategoryMenu.module.scss';

const CategoryMenu = props => {
  const [state] = useContext(BookContext)();

  return (
    <div className={styles.menuContainer}>
      <h3>Categories</h3>
      <ul>
        {state.categories.map(category => (
          <NavLink
            to={`/browse/${category.split(' ').join('_')}`}
            className={styles.filterOption}
            key={category}
            activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          >
            {category} (
            {state.books.filter(b => b.category === category).length})
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
