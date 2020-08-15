import React from 'react';

const NavLink = ({href, text}) => {
    return(
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}

export default NavLink;

