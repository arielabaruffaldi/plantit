import React, { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "./../firebase/index";
import Loader from "./../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const idToShow = useParams().id;

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(idToShow);
    item.get().then((doc) => {
      if (!doc.exists) {
        console.log("no existe el producto");
      }

      setProduct({ ...doc.data(), id: doc.id });
      setLoading(false);
    });
  }, []);

  return (
    <section className="layout__container">
      {loading ? (
        <Loader />
      ) : (
        <ItemDetail
          key={product.id}
          img={`/assets/img/${product.imageId}`}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
          color={product.color}
        />
      )}
    </section>
  );
};

export default ItemDetailContainer;
