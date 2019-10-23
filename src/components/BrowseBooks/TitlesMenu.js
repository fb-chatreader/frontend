import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../../scss/components/BookPage.module.scss';

const TitlesMenu = (props) => {
  console.log('titles props');
  console.log('titles props');
  console.log('titles props');
  console.log('titles props');
  console.log(props.data);

  return (
    <div className={styles.titlesMenuContainer}>
      {props.data.books
        .filter((b) => b.category === props.data.selectedCategory)
        .sort((a, b) => b.rating_qty - a.rating_qty)
        .map((b) => {
          console.log('====================================');
          console.log(b);
          console.log('====================================');
          return <Link to={`/summary/${b.id}`}>{b.title}</Link>;
        })}
    </div>
  );
};

export default TitlesMenu;
