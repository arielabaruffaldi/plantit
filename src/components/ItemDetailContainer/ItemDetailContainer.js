import React, { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";
import productsList from "../../constants/productsList";

const ItemDetailContainer = ({ idToShow }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsList().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <p>Cargando ficha</p>}

      {products
        .filter((p) => p.id == idToShow)
        .map((filteredProduct) => (
          <ItemDetail
            key={filteredProduct.id}
            img={filteredProduct.img}
            title={filteredProduct.title}
            price={filteredProduct.price}
            description= {filteredProduct.description}
          />
        ))}
    </>
  );
};

export default ItemDetailContainer;
