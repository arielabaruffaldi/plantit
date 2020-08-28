import React from "react";
import "./Home.scss";
import fondo from "./../../assets/img/home.png";
import ItemList from "./../../components/ItemList/ItemList";

const Home = ({ greeting }) => {
  return (
    <>
      <section className="home">
        <div></div>
        <p>
          trending <span>collection</span>
        </p>
        <h1>
          Re-discover <span>your green</span>
        </h1>
        <a href="#asd">view collection</a>
        <img src={fondo} alt="home fondo"/>
      </section>
      <ItemList></ItemList>
    </>
  );
};

export default Home;
