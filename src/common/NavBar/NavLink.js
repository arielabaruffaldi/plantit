import React from 'react';
import './styles.css'


const NavLink = ({href, text}) => {
    return(
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}

export default NavLink;

