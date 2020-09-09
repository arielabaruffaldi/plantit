import React from "react";
import "./Home.scss";
import fondo from "./../../assets/img/home.png";
import ItemList from "./../../components/ItemList/ItemList";

const Home = () => {
  return (
    <>
      <section className="home">
        <div></div>
        <p>
          trending <span>collection</span>
        </p>
        <h1>
          Redescubrí <span>tus espacios</span>
        </h1>
        <a href="#asd">ver colección</a>
        <img src={fondo} alt="home fondo"/>
      </section>
      <ItemList></ItemList>
    </>
  );
};

export default Home;
