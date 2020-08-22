import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = ({href, text}) => {
    return(
        <li>
            <Link to = {`${href}`}>{text}</Link>
        </li>
    )
}

export default NavLink;

