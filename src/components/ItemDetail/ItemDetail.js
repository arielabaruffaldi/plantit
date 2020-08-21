import React from "react";
import "./ItemDetail.scss";
import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = ({ img, title, price, description }) => {
  return (
    <>
      {console.log(img)}
      {
        <section className="ficha">
          <img src={img} />
          <div className="fichaDatos">
            <div className="info">
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="price">{`$${price}`}</p>
            </div>

            <ItemCount initial={0} min={0} max={5} />
          </div>
        </section>
      }
    </>
  );
};

export default ItemDetail;
