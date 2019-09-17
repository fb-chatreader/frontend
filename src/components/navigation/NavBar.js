import React from 'react';
import { withRouter } from "react-router-dom";
import NavNonAuth from './NavNonAuth';
import './css/NavBar.css';

// Currently NavBar only renders NavNonAuth
// If we implement authentication, we can create a NavAuth with different links and styling
// and pass props to NavBar including an isAuthenticated prop to determine with NavBar type to render:

const NavBar = () => (
    <div className='navbar-container'>
        <NavNonAuth />
    </div>
    // <div>{props.authUser ? <NavAuth /> : <NavNonAuth />}</div>
);

export default withRouter(NavBar);