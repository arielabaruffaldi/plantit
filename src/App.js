import React from "react";
import "./styles/App.scss";
import NavBar from "./common/NavBar/NavBar";
import Home from "./page/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";

import styled from "styled-components";
import phone from "./assets/icons/phone.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <PhoneSticky>
        <a href="#"> 11 2345 6789 </a>
      </PhoneSticky>
      <Home />
      <ItemList/>
      <ItemDetailContainer idToShow = {2}/>
      {/* 
    <Galeria /> */}
    </div>
  );
}

export default App;

const PhoneSticky = styled.span`
  position: fixed;
  top: 50%;
  transform: rotate(-90deg);
  font-weight: 600;
  > a{
          text - decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :before{
          content:"";
      background: url(${phone});
      width: 2em;
      height: 2em;
      position: absolute;
      left: -3em;
    }
  }
`;
