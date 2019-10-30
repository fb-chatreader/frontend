import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideMenu.module.scss';

const TitlesSidebarMenu = ({ books }) => {
  return (
    <div className={styles.titlesMenuContainer}>
      {books ? (
        books.map(b => {
          return (
            <Link key={b.id} to={`/summary/${b.id}`}>
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

export default TitlesSidebarMenu;
