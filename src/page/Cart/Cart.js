import React, { useState } from "react";
import ItemCart from "./../../components/ItemCart/ItemCart";
import imgPrueba from "./../../assets/img/1.jpg";
import ItemCount from "./../../components/ItemCount/ItemCount";
import "./Cart.scss";
import { useListContext } from "./../../context/CartContext";

const Cart = () => {
  const { listItems } = useListContext();
  return (
    <section className="checkout layout__container">
      <h1>Carrito de la compra</h1>
      <span>{listItems.length} articulos</span>
      {/* TODO: modular esto en componentes */}
      <ul className="item_card_wrapper">
        {listItems.map((item) => {
          return (
            <li className="item" key={item.id}>
              <ItemCart
                id={item.id}
                title= {item.title}
                price={item.price}
                img={item.img}
                color={"rosa"}
                cantidad={item.count}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cart;
