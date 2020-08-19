import React, { useEffect, useState } from "react";
import "./Item.scss";

const Item = ({ id, img, title, price }) => {
  return (
    <li className="item">
      <a href={`/${id}`}>
        <img src={img} />
        <div className="info">
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
        </div>
      </a>
    </li>
  );
};

export default Item;
