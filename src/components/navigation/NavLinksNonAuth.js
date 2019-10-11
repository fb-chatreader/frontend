import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import styles from '../../scss/components/NavLinksNonAuth.module.scss';

const NavLinksNonAuth = () => (
  <div className={styles.navLinksNonAuth}>
    <NavLink
      exact
      to="/"
      className={styles.navLink}
      activeStyle={{ color: 'black' }}
    >
      Home
    </NavLink>
    <NavLink
      to="/chooseplan"
      className={styles.navLink}
      activeStyle={{ color: 'black' }}
    >
      Checkout
    </NavLink>
    <NavLink
      to="/browse"
      className={styles.navLink}
      activeStyle={{ color: 'black' }}
    >
      Browse Books
    </NavLink>
  </div>
);

export default withRouter(NavLinksNonAuth);
