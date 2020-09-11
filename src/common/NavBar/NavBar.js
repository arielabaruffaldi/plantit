import React, { useState, useEffect } from "react";
import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import styles from "./NavBar.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import { useCartContext } from "./../../context/CartContext";

const navItems = [
  {
    text: "Colecciones",
    href: "/colecciones",
  },
  {
    text: "Plantas",
    href: "/plantas",
    children: [
      { text: "interior", href: "/interior" },
      { text: "exterior", href: "/exterior" },
    ],
  },
  {
    text: "Accesorios",
    href: "/accesorios",
  },
];

const NavBar = () => {
  const { quantity } = useCartContext();
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <header className={navbarClasses.join(" ")}>
      <nav>
        <NavLinks href="/">
          plant <span>it.</span>
        </NavLinks>
        <ul className={styles.navLinks}>
          {navItems.map(function (item, key) {
            return (
              <li key={key}>
                <NavLinks href={item.href} text={item.text} />
                {item.children && (
                  <ul className={styles.submenu}>
                    {item.children.map(function (subItem, key) {
                      return (
                        <li key={key}>
                          <NavLinks
                            href={`${item.href}${subItem.href}`}
                            text={subItem.text}
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
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
              <img src={cart} alt="carrito" width="50" />
              <span>{quantity}</span>
            </NavLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
