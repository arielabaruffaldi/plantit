import React from "react";
import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import "./NavBar.scss";
import NavLink from "../NavLink/NavLink";

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Plantas",
    href: "/plantas",
  },
  {
    text: "Accesorios",
    href: "/accesorios",
  },
];

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink className="logo" href="/" >
          plant <span>it.</span>
        </NavLink>
        <ul className="nav-links">
          {navItems.map(function (item, key) {
            return (
              <li>
                <NavLink href={item.href} key={key} text={item.text} />
              </li>
            );
          })}
        </ul>
        <ul className="right-nav">
          <li>
            <a href="#">
              <img src={search} width="15" />
            </a>
          </li>
          <li>
            <a href="#">Cuenta </a>
          </li>
          <li>
            <a href="#">
              <img src={cart} width="50" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
