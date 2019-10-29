import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import styles from './styles/NavLinksNonAuth.module.scss';

const NavLinksNonAuth = () => (
  <div className={styles.navLinksNonAuth}>
    <NavLink exact to="/" className={styles.navLink} activeStyle={{ color: '#ddd' }}>
      Home
    </NavLink>
    {/* <NavLink
      to="/chooseplan"
      className={styles.navLink}
      activeStyle={{ color: 'black' }}
    >
      Checkout
    </NavLink> */}
    <NavLink
      to='/publicpricing'
      className={styles.navLink}
      activeStyle={{ color: 'black' }}
    >
      Pricing
    </NavLink>
    <NavLink to="/browse" className={styles.navLink} activeStyle={{ color: '#ddd' }}>
      Browse Books
    </NavLink>
  </div>
);

export default withRouter(NavLinksNonAuth);
