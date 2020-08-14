import React, { useEffect, useState } from 'react';
import Item from './Item';
import styled from "styled-components";


function getFromRemote() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{ id: 1, nombre: "Gorro", precio: 10 }, { id: 2, nombre: "Pulsera", precio: 5 }]);
        }, 0);

    });
}

function ItemList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getFromRemote().then(res => {
            setProducts(res);
        });
    }, []);

    return (
        <Ul classList="itemList">
            {products.map(producto => (
                <Item id={producto.id} nombre={producto.nombre} precio={producto.precio}></Item>
            ))}
        </Ul>
    )
}


export default ItemList;

const Ul = styled.ul`
    width: 70%
`