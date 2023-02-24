import { NavLink } from "react-router-dom";
import React from "react";
import { routes } from "../Routers/Routes";

function Header() {
  return (
    <>
      <NavLink to={routes.home}>Home</NavLink>
      <NavLink to={routes.shop}>Shop</NavLink>
      <NavLink to={routes.cart}>Cart</NavLink>
    </>
  );
}

export default Header;
