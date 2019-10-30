import React from 'react';
import { withRouter } from 'react-router-dom';
import NavLinksNonAuth from './NavLinksNonAuth';
import styles from './styles/NavBar.module.scss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RESP_DEVICE_WIDTHS from '../styles/scss/constants';

// Currently NavBar only renders NavNonAuth
// If we implement authentication, we can create a NavLinksAuth with different links and styling
// and pass props to NavBar including an isAuthenticated prop to determine which NavLinks type to render:

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navBarContents}>
        <h1 className={styles.appName}>Chatwise</h1>
        <NavLinksNonAuth />
      </div>
    </div>
  );
  // <div>{props.authUser ? <NavAuth /> : <NavNonAuth />}</div>
};

export default withRouter(NavBar);
