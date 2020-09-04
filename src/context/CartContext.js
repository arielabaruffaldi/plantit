import React, { useContext, useState } from "react";

export const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext);

export function ListProvider({ children, min, max, initial }) {
  const [count, setCount] = useState(initial);
  const [listItems, setListItems] = useState([]);
  const restar = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  //TODO: Ver por qué en ItemDetail no puedo reemplazar la funcion onAdd con esta
  function counterHandler(countComp) {
    setCount(countComp);
  }

  function addItemCart(itemAdd) {
    const newList = [...listItems, itemAdd];
    setListItems(newList);
    setCount(initial);
    console.log(listItems)
  }

  function getQuantityCart(){
    let total = 0;
    listItems.map(item=>{
      total += item.count;
    })
    return total;
  }

  return (
    <CartContext.Provider value={{ restar, sumar, count, counterHandler, addItemCart, listItems, quantity: getQuantityCart() }}>
      {children}
    </CartContext.Provider>
  );
}
