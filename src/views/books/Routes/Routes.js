import React from 'react';
import { Route } from 'react-router-dom';

import SummaryView from 'views/books/components/Summary';
import CategoryMenu from 'views/books/components/CategoryMenu';
import BookList from 'views/books/components/BookList';

import styles from '../styles/Routes.module.scss';

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
    </>
  );
}

export default Routes;
