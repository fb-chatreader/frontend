import React from 'react';
import { withRouter, NavLink } from "react-router-dom";

const NavNonAuth = () => (
    <div className="nav-non-auth-container">
        <h1 className="logo">FB Chat Reader</h1>
        <div className="nav-link-container">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
        </div>
    </div>
);

export default withRouter(NavNonAuth);