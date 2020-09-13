import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCart.module.scss";

const Item = ({ id, img, title, price, color, cantidad, deleteItem }) => {
  return (
    <li className={styles.item} key={id}>
        <img src={img} alt="item" />
        <div className={styles.infoCart}>
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
          <p className={styles.color}>{color}</p>
          <p>{cantidad} unidades</p>
          <span onClick={deleteItem}>Eliminar</span>
        </div>
    </li>
  );
};

export default Item;
