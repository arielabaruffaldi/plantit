import React, { useState } from "react";
import "./ItemDetail.scss";
import ItemCount from "./../ItemCount/ItemCount";


const ItemDetail = ({ img, title, price, description }) => {

  const [count, setCount] = useState()

  function onAdd(countComp) {
    setCount(countComp);
  }

  return (
    <>
      <section className="ficha">
        <img src={img} alt="foto producto" />
        <div className="fichaDatos">
          <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="price">{`$${price}`}</p>
          </div>
          <ItemCount initial={1} min={1} max={5} onAdd={onAdd}>
            <button className='addToCart' >agregar al carrito {count} {count === 1 ? `item` : `items`}</button>
          </ItemCount>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
