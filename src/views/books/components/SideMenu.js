import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideMenu.module.scss';

const SideMenu = ({ books }) => {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.additionalCatTitles}>Also In This Category:</h1>
      {books ? (
        books.map(b => {
          return (
            <Link
              key={b.id}
              className={styles.titleLink}
              to={`/summary/${b.id}`}
            >
              {b.title}
            </Link>
          );
        })
      ) : (
        <p>Loading titles...</p>
      )}
    </div>
  );
};

export default SideMenu;
