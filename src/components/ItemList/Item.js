import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, price }) => {
  return (
    <li className={styles.item}>
      <Link to={`/item/${id}`}>
        <img src={img} alt="item"/>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
