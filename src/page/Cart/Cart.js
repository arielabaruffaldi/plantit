import React from "react";
import ItemCart from "./../../components/ItemCart/ItemCart";
import styles from "./Cart.module.scss";
import { useCartContext } from "./../../context/CartContext";
import NavLinks from "./../../common/NavLinks/NavLinks";
import ButtonGreen from "./../../components/ButtonGreen/ButtonGreen";

const Cart = () => {
  const { listItems } = useCartContext();
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
              return (
                <>
                  <ItemCart
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    color={"rosa"}
                    cantidad={item.count}
                  />
                </>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
};

export default Cart;
