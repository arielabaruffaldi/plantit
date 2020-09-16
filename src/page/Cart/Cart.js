import React, { useState } from "react";
import ItemCart from "./../../components/ItemCart/ItemCart";
import styles from "./Cart.module.scss";
import { useCartContext } from "./../../context/CartContext";
import NavLinks from "./../../common/NavLinks/NavLinks";
import ButtonGreen from "./../../components/ButtonGreen/ButtonGreen";
import Form from "./../../components/Form/Form";
import { getFirestore } from "./../../components/firebase/index";
import Loader from "./../../components/Loader/Loader";

const Cart = () => {
  const {
    listItems,
    setListItems,
    totalPrice,
    buyer,
    deleteItemCart,
  } = useCartContext();

  const [checkout, setCheckout] = useState(false);
  const [orderId, setorderId] = useState();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  let listItemsCart = [];
  listItems.map((item) => {
    listItemsCart = [
      ...listItemsCart,
      {
        id: item.id,
        title: item.title,
        count: item.count,
        price: item.price,
      },
    ];
  });

  function handleClick() {
    !checkout ? setCheckout(true) : setCheckout(false);
  }

  function createOrder() {
    console.log("entra aca");
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");

    listItemsCart.map((item) => {
      const itemStock = db.collection("items").doc(item.id);
      itemStock.get().then((doc) => {
        const stockPrevio = doc.data().stock;
        const docRef = db.collection("items").doc(item.id);
        var actualizarStock = docRef.update({
          stock: stockPrevio - item.count,
        });
      });
    });

    const newOrder = { buyer, listItemsCart, totalPrice };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setorderId(id);
        console.log(id);
      })
      .catch((err) => {
        /*  setError(err) */
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setSuccess(true);
        setListItems([]);
        setCheckout(false);
        console.log(loading);
      });
  }

  return (
    <>
      <section className={`${styles.checkout} layout__container`}>
        {!loading ? (
          <>
            {!success && (
              <>
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
                              editable={checkout ? false : true}
                              deleteItem={() => deleteItemCart(item.id)}
                            />
                          </>
                        );
                      })}
                    </ul>
                    <div>
                      <span className={styles.totalCheckout}>
                        TOTAL: ${totalPrice}
                      </span>
                      <ButtonGreen onClickHandler={handleClick}>
                        <button>
                          {!checkout ? "Ir al checkout" : "Modificar orden"}
                        </button>
                      </ButtonGreen>
                    </div>
                  </>
                )}
              </>
            )}
            {checkout && (
              <>
                <Form createOrder={createOrder} />
              </>
            )}
          </>
        ) : (
          <Loader />
        )}
        {success && (
          <section className={styles.success}>
            <h2>Compra satisfactoria!</h2>
            <p>número de compra: {orderId}</p>
          </section>
        )}
      </section>
    </>
  );
};

export default Cart;
