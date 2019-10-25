import React from 'views/browse/summary/components/node_modules/react';
import { Link } from 'views/browse/summary/components/node_modules/react-router-dom';
import styles from '../styles/TitlesSidebarMenu.module.scss';

const TitlesSidebarMenu = (props) => {
  console.log('TitlesMenu props.data.selectedCategory:', props.data.selectedCategory);
  return (
    <div className={styles.titlesMenuContainer}>
      {(props.books && props.selectedCategory) ? (
        props.books
          .filter((b) => b.category === props.selectedCategory)
          .sort((a, b) => b.rating_qty - a.rating_qty)
          .map((b) => {
            return <Link to={`/summary/${b.id}`}>{b.title}</Link>;
          })
      ) : (
        <p>Loading titles...</p>
      )}
    </div>
  );
};

export default TitlesSidebarMenu;