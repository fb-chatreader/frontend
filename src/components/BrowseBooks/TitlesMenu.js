import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/components/BookPage.module.scss';

const TitlesMenu = (props) => {
  return (
    <div className={styles.titlesMenuContainer}>
      {props.data.books
        .filter((b) => b.category === props.data.selectedCategory)
        .sort((a, b) => b.rating_qty - a.rating_qty)
        .map((b) => {
          return <Link to={`/summary/${b.id}`}>{b.title}</Link>;
        })}
    </div>
  );
};

export default TitlesMenu;
