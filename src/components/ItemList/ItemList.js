import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.scss";
import productsList from "../../constants/productsList";

function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    productsList().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
      <section className="layout__container">
        {loading && <p>Cargando prods</p>}
        <ul className="ItemListWrapper">
          {products.map((producto, key) => (
            <Item
              id={producto.id}
              title={producto.title}
              price={producto.price}
              img={producto.img}
              key={key}
            ></Item>
          ))}
        </ul>
      </section>
  );
}

export default ItemList;
