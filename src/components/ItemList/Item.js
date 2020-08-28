import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, price }) => {
  return (
    <li className="item">
      <Link to={`/item/${id}`}>
        <img src={img} alt="item"/>
        <div className="info">
          <h3>{title}</h3>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
