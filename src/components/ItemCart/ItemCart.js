import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCart.module.scss";
import ButtonGreen from "./../ButtonGreen/ButtonGreen"

const Item = ({ id, img, title, price, color, cantidad, deleteItem, editable }) => {
  return (
    <li className={styles.item} key={id}>
      <img src={img} alt="item" />
      <div className={styles.infoCart}>
        <h3>{title}</h3>
        <div>
          <p>{`$${price}`}</p>
          <p className={styles.color}>{color}</p>
          <p>{cantidad} unidades</p>
        </div>
        {editable &&<ButtonGreen handleClick={deleteItem} borderNone={true}><button>Eliminar</button></ButtonGreen>}
      </div>
    </li>
  );
};

export default Item;
