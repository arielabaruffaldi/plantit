import React, { useState, useEffect } from "react";
import Item from "./../ItemList/Item";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  function getFromRemote() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({ id: 3, nombre: "Pantalon", precio: 15 });
      }, 3000);
    });
  }

  useEffect(() => {
    getFromRemote().then((res) => {
      setItem(res);
    });
  }, []);

  return <Item id={item.id} nombre={item.nombre} precio={item.precio}></Item>;
};

export default ItemDetailContainer;
