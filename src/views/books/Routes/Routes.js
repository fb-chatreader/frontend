import React from 'react';
import { Route } from 'react-router-dom';

import SummaryView from 'views/books/components/Summary';
import CategoryMenu from 'views/books/components/CategoryMenu';
import BookList from 'views/books/components/BookList';
import SingleBookPage from 'views/books/components/SingleBookPage';

import styles from '../styles/BookList.module.scss';

function Routes(props) {
  return (
    <>
      <div className={styles.browseBooks}>
        <Route path="/browse">
          <CategoryMenu />
        </Route>

        <Route path="/browse/:category">
          <BookList />
        </Route>

        <Route exact path="/browse">
          <BookList empty />
        </Route>
      </div>

      <Route path="/summary/:id">
        <SummaryView />
      </Route>

      <Route path="/singlebook/:id">
        <SingleBookPage />
      </Route>
    </>
  );
}

export default Routes;
