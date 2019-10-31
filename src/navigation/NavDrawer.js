import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinksNonAuth from './NavLinksNonAuth';
import styles from './styles/NavBar.module.scss';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <h3 style={{ textAlign: 'center' }}>CHATWISE</h3>
      <Divider />
      <List>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ddd'
          }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </NavLink>

        <NavLink
          to="/browse"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ddd'
          }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Browse</ListItemText>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        {/* <NavLink
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: '#ddd'
          }}
        > */}
        <ListItem button>
          <ListItemIcon>{}</ListItemIcon>
          <ListItemText>Log In</ListItemText>
        </ListItem>
        {/* </NavLink> */}
      </List>
    </div>
  );

  return (
    <div className={styles.navBarContents}>
      <Button
        className={styles.menuBtnContainer}
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon className={styles.menuBtn} fontSize={'large'} />
      </Button>
      <div className={styles.appName}>
        <h1>CHATWISE</h1>
      </div>
      <div className={styles.linksContainter}>
        <NavLinksNonAuth />
      </div>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
