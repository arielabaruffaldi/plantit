import React, { useEffect, useState } from "react";
import Item from "./Item";
import imgPrueba from './../../assets/img/home.png';
import './ItemList.scss';


function getFromRemote() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 1, title: "Monstera", price: 10 },
        { id: 2, title: "Sanseviera", price: 5 },
        { id: 3, title: "Dieffembaquia", price: 50},
        { id: 4, title: "Espatifilio", price: 500 }
      ]);
    }, 0);
  });
}

function ItemList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getFromRemote().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <ul className='ItemListWrapper'>
      {products.map((producto) => (
        <Item
          id={producto.id}
          title={producto.title}
          price={producto.price}
          img={imgPrueba}
        ></Item>
      ))}
    </ul>
  );
}

export default ItemList;
