import React from "react";
import CartIcon from "./../../components/CartIcon";
import styled from "styled-components";

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

const NavBar = ({ children }) => {
  return (
    <Nav>
      <Ul>
        {navItems.map(function (item) {
          return (
            <Li>
              <A href="#">{item.text}</A>
            </Li>
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
