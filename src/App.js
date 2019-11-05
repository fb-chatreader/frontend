import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './navigation/NavDrawer';
import LandingPage from './views/Landing/LandingPage';
import BillingRoutes from './views/billing/Routes/';
import BookRoutes from 'views/books/Routes';

import styles from './App.module.scss';

function App() {
  console.log(document.getElementsByTagName('head')[0]);

  return (
    <div className={styles.App}>
      <NavBar />

      <Route exact path="/">
        <LandingPage />
      </Route>

      <BillingRoutes />

      <BookRoutes />
    </div>
  );
}

export default App;
