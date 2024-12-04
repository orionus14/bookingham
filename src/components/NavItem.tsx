import React from "react";
import { NavLink } from "react-router-dom"

interface INavItem {
    to: string;
    children: React.ReactNode
}

const NavItem: React.FC<INavItem> = ({ to, children }) => {
    const activeClass = 'underline';

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
               `${isActive ? activeClass : ''}` 
            }
        >
            {children}
        </NavLink>
    )
}

export default NavItem