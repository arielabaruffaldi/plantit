import React, { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "./../firebase/index";
import productsList from "./../../constants/productsList";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const idToShow = useParams().id;

  /* useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const priceyItems = itemCollection.where("price", "<", 3000);
    priceyItems.get().then((querySnapshot) => {
      if (!querySnapshot.size === 0) {
        console.log("no hay items");
      }
      setProducts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    });
  }, []); */

  useEffect(() => {
     const misProductos = Promise.resolve(productsList());
    misProductos.then((data) => {
      console.log(data);
    });
    //setProducts(productsList);
    setLoading(false);
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
