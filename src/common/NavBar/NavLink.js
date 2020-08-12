import React from 'react';
import styled from "styled-components";


const NavLink = ({href, text}) => {
    console.log(text)
    return(
        <Li>
            <A href={href}>{text}</A>
        </Li>
    )
}

export default NavLink;

const Li = styled.li`
  list-style: none;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;