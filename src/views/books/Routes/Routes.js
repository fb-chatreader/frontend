import React from 'react';
import { Route } from 'react-router-dom';

import BrowseBooks from 'views/books/components/BrowseBooks';
import SummaryView from 'views/books/components/Summary';

function Routes(props) {
  return (
    <>
      <Route exact path="/browse">
        <BrowseBooks />
      </Route>

      <Route path="/summary/:id">
        <SummaryView />
      </Route>
    </>
  );
}

export default Routes;
