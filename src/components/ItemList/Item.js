import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Item = ({ id, nombre, precio }) => {
    return (
        <Ul className="item">
            <li>
                {id}
            </li>
            <li>
                {nombre}
            </li>
            <li>
                {`$${precio}`}
            </li>
        </Ul>
    )
}

export default Item;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 1em 0;
  li{
      padding: 0 .5em;
  }
  
`;