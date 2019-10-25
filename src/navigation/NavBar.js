import React from 'react';
import { withRouter } from 'react-router-dom';
import NavLinksNonAuth from './NavLinksNonAuth';
import styles from './styles/NavBar.module.scss';

// Currently NavBar only renders NavNonAuth
// If we implement authentication, we can create a NavAuth with different links and styling
// and pass props to NavBar including an isAuthenticated prop to determine with NavBar type to render:

const NavBar = () => (
  <div className={styles.navbar}>
    <div className={styles.navBarContents}>
      <h1 className={styles.appName}>Chatwise</h1>
      <NavLinksNonAuth />
    </div>
  </div>
  // <div>{props.authUser ? <NavAuth /> : <NavNonAuth />}</div>
);

export default withRouter(NavBar);
