import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ href, text, children }) => {
  return (
    <Link to={`${href}`} className= {children && "logo"}>
      {text}
      {children}
    </Link>
  );
};

export default NavLink;
