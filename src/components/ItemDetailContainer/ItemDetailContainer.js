import React, { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";
import productsList from "../../constants/productsList";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const idToShow = useParams().id;

  useEffect(() => {
    productsList().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <section className="layout__container">
      {loading && <p>Cargando ficha</p>}

      {products
        .filter((p) => p.id === idToShow)
        .map((filteredProduct) => (
          <ItemDetail
            key={filteredProduct.id}
            img={filteredProduct.img}
            title={filteredProduct.title}
            price={filteredProduct.price}
            description={filteredProduct.description}
            id={filteredProduct.id}
            color={filteredProduct.color}
          />
        ))}
    </section>
  );
};

export default ItemDetailContainer;
