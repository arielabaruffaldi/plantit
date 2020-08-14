import React from "react";
import CartIcon from "../../components/CartIcon/CartIcon";
import styled from "styled-components";
import NavLink from "./../../common/NavBar/NavLink";

const navItems = [
  {
    text: "Link1",
    href: "#"
  },
  {
    text: "Link2",
    href: "#"
  },
  {
    text: "Link3",
    href: "#"
  }
];

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        {navItems.map(function (item, key) {
          return (
            <NavLink href={item.href} key={key} text={item.text}></NavLink>
          );
        })}
        <Li>
          <A href="#">
            <CartIcon />
          </A>
        </Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  width: 100%;
  padding: 1em;
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Li = styled.li`
  list-style: none;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;
