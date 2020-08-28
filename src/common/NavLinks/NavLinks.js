import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ href, text, children }) => {
  return (
    <NavLink to={`${href}`} activeClassName="activeCategory">
      {text}
      {children}
    </NavLink>
  );
};

export default NavLinks;
