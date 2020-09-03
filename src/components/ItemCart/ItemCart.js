import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, img, title, price, color, cantidad }) => {
    return (
            <Link to={`/item/${id}`}>
                <img src={img} alt="item" />
                <div className="info">
                    <h3>{title}</h3>
                    <p>{`$${price}`}</p>
                    <p className="color">{color}</p>
                    <p>{cantidad} unidades</p>
                </div>
            </Link>
        
    );
};

export default Item;
