import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./ItemList.module.scss";
import { getFirestore } from "./../firebase/index";

function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const priceyItems = itemCollection.where("price", "<", 3000);
    priceyItems.get().then((querySnapshot) => {
      if (!querySnapshot.size === 0) {
        console.log("no hay items");
      }
      setProducts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setLoading(false);
    });
  }, []);

  return (
    <section className="layout__container">
      {loading && <p>Cargando prods</p>}
      <ul className={styles.ItemListWrapper}>
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
