import React, { useEffect, useState } from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, price }) => {
  return (
    <li className="item">
      <Link to={`/${id}`}>
        <img src={img} />
        <div className="info">
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
