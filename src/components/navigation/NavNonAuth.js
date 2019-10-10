import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import styles from '../../scss/components/NavNonAuth.module.scss';

const NavNonAuth = () => (
  <div className="nav-non-auth-container">
    <h1 className={styles['appName']}>Chatwise</h1>
    <div className="nav-link-container">
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeStyle={{ color: 'black' }}
      >
        Home
      </NavLink>
      <NavLink
        to="/chooseplan"
        className="nav-link"
        activeStyle={{ color: 'black' }}
      >
        Checkout
      </NavLink>
      <NavLink
        to="/browse"
        className="nav-link"
        activeStyle={{ color: 'black' }}
      >
        Browse Books
      </NavLink>
    </div>
  </div>
);

export default withRouter(NavNonAuth);
