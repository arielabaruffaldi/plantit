import React from "react";
import cart from "./../../assets/icons/cart.svg";
import search from "./../../assets/icons/search.svg";
import './NavBar.scss'
import NavLink from "../NavLink/NavLink";

const navItems = [{
    text: "Home",
    href: "#"
},
{
    text: "Plantas",
    href: "#"
},
{
    text: "Accesorios",
    href: "#"
}
];

const NavBar = () => {
    return (<nav>
        <a href="#" className="logo">
            Nombre <span>plants.</span>
        </a>
        <ul className="nav-links"> {
            navItems.map(function (item, key) {
                return (
                    <NavLink href={item.href}
                        key={key}
                        text={item.text}>
                    </NavLink>
                )
            })
        } </ul> <ul className="right-nav" >
            <li>
                <a href="#" >
                    <img src={search}
                        width="15" />
                </a>
            </li>
            <li>
                <a href="#" >Cuenta </a> </li> <li><a href="#" >
                    <img src={cart}
                        width="50" />
                </a>
            </li>
        </ul>
    </nav >
    );
};

export default NavBar;