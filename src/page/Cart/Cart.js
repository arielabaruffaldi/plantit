import React, { useState } from "react";
import ItemCart from './../../components/ItemCart/ItemCart';
import imgPrueba from './../../assets/img/1.jpg';
import ItemCount from './../../components/ItemCount/ItemCount';
import './Cart.scss';

const Cart = () => {
  const [count, setCount] = useState()

  function onAdd(countComp) {
    setCount(countComp);
  }
  return (
    <section className='checkout layout__container'>
      <h1>Carrito de la compra</h1>
      <span>1 artículo</span>
      <ul className="item_card_wrapper">
        <li className="item">
          <ItemCart id={1} title={"Sanseviera"} price={5} img={imgPrueba} color={"rosa"} cantidad={1} />
          <ItemCount initial={1} min={1} max={5} onAdd={onAdd}>
          </ItemCount>
        </li>
        <li className="item">
          <ItemCart id={1} title={"Monstera"} price={15} img={imgPrueba} color={"rosa"} cantidad={1} />
          <ItemCount initial={1} min={1} max={5} onAdd={onAdd}>
          </ItemCount>
        </li>
      </ul>
    </section>
  );
};

export default Cart;
