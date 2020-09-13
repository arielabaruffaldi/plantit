import React, { useState } from "react";
import ItemCart from "./../../components/ItemCart/ItemCart";
import styles from "./Cart.module.scss";
import { useCartContext } from "./../../context/CartContext";
import NavLinks from "./../../common/NavLinks/NavLinks";
import ButtonGreen from "./../../components/ButtonGreen/ButtonGreen";
import Form from './../../components/Form/Form'

const Cart = () => {
  const { listItems, totalPrice, buyer, deleteItemCart } = useCartContext();
  const [checkout, setCheckout] = useState(false);
  function handleClick() {
    !checkout ? setCheckout(true) : setCheckout(false);
  }

  return (
    <section className={`${styles.checkout} layout__container`}>
      <h1>Carrito de la compra</h1>

      {listItems.length < 1 ? (
        <>
          <h2> no hay items</h2>
          <ButtonGreen>
            <NavLinks href={"/"}>ir a la home</NavLinks>
          </ButtonGreen>
        </>
      ) : (
          <>
            <span>{listItems.length} articulos</span>
            <ul className={styles.item_card_wrapper}>
              {listItems.map((item) => {
                console.log(item)
                return (
                  <>
                    <ItemCart
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      img={item.img}
                      color={"rosa"}
                      cantidad={item.count}
                      deleteItem={() => deleteItemCart(item.id)}
                      editable={checkout ? false : true}
                    />
                  </>
                );
              })}
            </ul>
            <span className={styles.totalCheckout}>TOTAL: ${totalPrice}</span>
            <ButtonGreen onClickHandler={handleClick}><button>{!checkout ? "Ir al checkout" : "Modificar orden"}</button></ButtonGreen>
          </>
        )}
      {checkout && <Form />}
      {buyer}
    </section>

  );
};

export default Cart;
