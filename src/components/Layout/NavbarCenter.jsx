import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCenter = ({className}) => {
  return (
    <div className={`header-center ${className}`}>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link" >Shop</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarCenter;
