import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCart.module.scss";

const Item = ({ id, img, title, price, color, cantidad }) => {
  return (
    <li className={styles.item} key={id}>
      <Link to={`/item/${id}`}>
        <img src={img} alt="item" />
        <div className={styles.infoCart}>
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
          <p className={styles.color}>{color}</p>
          <p>{cantidad} unidades</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
