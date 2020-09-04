import React, { useEffect } from "react";
import styles from "./ItemCount.module.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCartContext } from "./../../context/CartContext";

const ItemCount = ({ onAdd, children }) => {
  const { sumar, restar, count } = useCartContext();
  useEffect(() => {
    onAdd(count);
  }, [count]);
  return (
    <div className={styles.itemCountWrapper}>
      <div className={styles.itemCount}>
        <button onClick={restar}>
          <RemoveIcon gcolor="primary" />
        </button>
        <p> {count} </p>
        <button onClick={sumar}>
          <AddIcon color="primary"></AddIcon>
        </button>
      </div>
      {children}
    </div>
  );
};

export default ItemCount;
