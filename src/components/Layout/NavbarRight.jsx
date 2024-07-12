import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

const NavbarRight = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  const totalItems = cartItems.reduce((accu, currentItem) => {
    return accu + currentItem.amount
  }, 0)


  return (
    <div className="header-right">
      <div className="header-cart">
        <NavLink to="/cart" className="header-cart-link">
          <ShoppingCartIcon className="header-cart-icon" />
          <span className="header-cart-count">{totalItems}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarRight;
