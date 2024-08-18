import {Link} from "react-router-dom";
import React from "react";

const NavItem = ({to, iconClass, label}) => (
    <li className="nav-item">
        <Link to={to} className="nav-link">
            <i className={iconClass}></i>
            <p>{label}</p>
        </Link>
    </li>
);

export default NavItem