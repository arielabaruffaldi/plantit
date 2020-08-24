import React from "react";
import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import "./NavBar.scss";
import NavLinks from "../NavLinks/NavLinks";

const navItems = [
  {
    text: "Colecciones",
    href: "/colecciones",
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
        <NavLinks className="logo" href="/">
          plant <span>it.</span>
        </NavLinks>
        <ul className="nav-links">
          {navItems.map(function (item, key) {
            return (
              <li>
                <NavLinks href={item.href} key={key} text={item.text} />
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
            <NavLinks href={"/cart"}>
              <img src={cart} width="50" />
            </NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
