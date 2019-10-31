import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/TitlesSideMenu.module.scss';

const TitlesSideMenu = ({ books, selectedCategory }) => {
  // console.log(books);
  console.log(selectedCategory);

  return (
    <div className={styles.titlesMenuContainer}>
      <h1 className={styles.additionalCatTitles}>Also In This Category:</h1>
      {books && selectedCategory ? (
        books.filter((b) => b.category === selectedCategory).sort((a, b) => b.rating_qty - a.rating_qty).map((b) => {
          return (
            <Link className={styles.titleLink} to={`/summary/${b.id}`}>
              {b.title}
            </Link>
          );
        })
      ) : (
        <p>Loading titles...</p>
      )}
    </div>
  );
  // return (
  //   <div className={styles.menuContainer}>
  //     <h1 className={styles.categoriesHeader}>Also In This Category:</h1>
  //     <div className={styles.filterOptionContainer}>
  //       {books ? (
  //         books.map((b) => {
  //           return (
  //             <Link key={b.id} className={styles.filterOption} to={`/summary/${b.id}`}>
  //               {b.title}
  //             </Link>
  //           );
  //         })
  //       ) : (
  //         <p>Loading titles...</p>
  //       )}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className={styles.titlesMenuContainer}>
  //     <h1 className={styles.additionalCatTitles}>Also In This Category:</h1>
  //     {props.books && props.selectedCategory ? (
  //       props.books
  //         .filter((b) => b.category === props.selectedCategory)
  //         .sort((a, b) => b.rating_qty - a.rating_qty)
  //         .map((b) => {
  //           return <Link className={styles.titleLink} to={`/summary/${b.id}`}>{b.title}</Link>;
  //         })
  //     ) : (
  //       <p>Loading titles...</p>
  //     )}
  //   </div>
  // );
};

export default TitlesSideMenu;
