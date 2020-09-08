import React, { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "./../firebase/index";
import productsList from "./../../constants/productsList";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const idToShow = useParams().id;

  useEffect(() => {
    const productos = productsList();
    console.log(productos);
    //setProducts(productsList);
    setLoading(false);
  }, [productsList]);

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
