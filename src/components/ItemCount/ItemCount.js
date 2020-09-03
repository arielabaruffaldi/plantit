import React, { useState, useEffect } from "react";
import "./ItemCount.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useListContext } from "./../../context/CartContext";

const ItemCount = ({ onAdd, children }) => {
  const { sumar, restar, count } = useListContext();
  useEffect(() => {
    onAdd(count);
  }, [count]);
  return (
    <div className="itemCountWrapper">
      <div className="itemCount">
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
