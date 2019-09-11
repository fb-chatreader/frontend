import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const NavNonAuth = () => (
    <div className='nav-non-auth-container'>
        <h1 className='logo'>FB Chat Reader</h1>
        <div className='nav-link-container'>
            <NavLink exact to='/' className='nav-link' activeStyle={{ color: 'black' }}>
                Home
            </NavLink>
            <NavLink to='/checkout' className='nav-link' activeStyle={{ color: 'black' }}>
                Checkout
            </NavLink>
        </div>
    </div>
);

export default withRouter(NavNonAuth);