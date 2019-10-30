import React from 'react';
import { Route } from 'react-router-dom';

import BookList from 'views/books/components/BookList';
import CategoryMenu from 'views/books/components/CategoryMenu';
import SummaryView from 'views/books/components/Summary';

function Routes(props) {
  return (
    <>
      <Route path="/browse">
        <CategoryMenu />
      </Route>

      <Route path="/browse/:category">
        <BookList />
      </Route>

      <Route path="/summary/:id">
        <SummaryView />
      </Route>
    </>
  );
}

export default Routes;
