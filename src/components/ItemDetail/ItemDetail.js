import React, { useState } from "react";
import styles from "./ItemDetail.module.scss";
import ItemCount from "./../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import PropTypes from "prop-types";

const ItemDetail = ({ img, title, price, description, id, color }) => {
  const { addItemCart, min } = useCartContext();
  const [count, setCount] = useState();

  function onAdd(countComp) {
    setCount(countComp);
  }

  return (
    <>
      <section className={styles.ficha}>
        <img src={img} alt="foto producto" />
        <div className={styles.fichaDatos}>
          <div className={styles.info}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className={styles.color}>color: <span>{color}</span></p>
            <p className={styles.price}>{`$${price}`}</p>
          </div>
          <ItemCount onAdd={onAdd}>
            <button
              className={styles.addToCart}
              disabled={count < min ? true : false}
              onClick={() =>
                addItemCart({
                  img: img,
                  description: description,
                  title: title,
                  id: id,
                  price: price,
                  count: count,
                })
              }
            >
              agregar al carrito {count} {count === 1 ? `item` : `items`}
            </button>
          </ItemCount>
        </div>
      </section>
    </>
  );
};

ItemDetail.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string
};

export default ItemDetail;
