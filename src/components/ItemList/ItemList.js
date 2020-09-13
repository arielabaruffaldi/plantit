import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import styles from "./ItemList.module.scss";
import { getFirestore } from "./../firebase/index";
import Loader from "./../Loader/Loader"

function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryId = useParams().categoryId;

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    let priceyItems = {};
    typeof categoryId == "undefined"
      ? (priceyItems = itemCollection.where("price", ">", 0))
      : (priceyItems = itemCollection
          .where("price", ">", 0)
          .where("categoryId", "==", categoryId));
    priceyItems.get().then((querySnapshot) => {
      if (!querySnapshot.size === 0) {
        console.log("no hay items");
      }
      setProducts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <section className="layout__container">
      {loading && <Loader/>}
      <ul className={styles.ItemListWrapper}>
        {products.map((producto, key) => (
          <Item
            id={producto.id}
            title={producto.title}
            price={producto.price}
            img={`/assets/img/${producto.imageId}`}
            key={key}
          ></Item>
        ))}
      </ul>
    </section>
  );
}

export default ItemList;
