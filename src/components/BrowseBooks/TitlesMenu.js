import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/components/BookPage.module.scss';

const TitlesMenu = (props) => {
  console.log('TitlesMenu props.data.categories:', props.data.categories);
  return (
    <div className={styles.titlesMenuContainer}>
      {props.data ? (
        props.data.books
          .filter((b) => b.category === props.data.selectedCategory)
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

export default TitlesMenu;

{/* <div className={styles.titlesMenuContainer}>
      {props.data.books
        .filter((b) => b.category === props.data.selectedCategory)
        .sort((a, b) => b.rating_qty - a.rating_qty)
        .map((b) => {
          return <Link to={`/summary/${b.id}`}>{b.title}</Link>;
        })}
    </div> */}
