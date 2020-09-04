import React from "react";
import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import styles from "./NavBar.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import { ListProvider, useCartContext } from "./../../context/CartContext";


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
  const {quantity} = useCartContext(); 

  return (
    <header>
      <nav>
        <NavLinks href="/">
          plant <span>it.</span>
        </NavLinks>
        <ul className={styles.navLinks}>
          {navItems.map(function (item, key) {
            return (
              <li key={key}>
                <NavLinks href={item.href}  text={item.text} />
              </li>
            );
          })}
        </ul>
        <ul className={styles.rightNav}>
          <li>
            <a href="#search">
              <img src={search} alt="busqueda" width="15" />
            </a>
          </li>
          <li>
            <a href="#cuenta">Cuenta </a>
          </li>
          <li>
            <NavLinks href={"/cart"}>
              <img src={cart} alt= "carrito" width="50" />
              <span>{quantity}</span>
            </NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
