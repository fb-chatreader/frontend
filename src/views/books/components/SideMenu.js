import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideMenu.module.scss';

const SideMenu = ({ books }) => {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.categoriesHeader}>Also In This Category:</h1>
      <div className={styles.filterOptionContainer}>
        {books ? (
          books.map((b) => {
            return (
              <Link key={b.id} className={styles.titleLink} to={`/summary/${b.id}`}>
                {b.title}
              </Link>
            );
          })
        ) : (
          <p>Loading titles...</p>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
