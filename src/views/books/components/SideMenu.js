import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideMenu.module.scss';

const TitlesSidebarMenu = ({ state }) => {
  return (
    <div className={styles.titlesMenuContainer}>
      {state.books && state.selected ? (
        state.books
          .filter(b => b.category === state.selected)
          .map(b => {
            return <Link to={`/summary/${b.id}`}>{b.title}</Link>;
          })
      ) : (
        <p>Loading titles...</p>
      )}
    </div>
  );
};

export default TitlesSidebarMenu;
