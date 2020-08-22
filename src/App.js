import React from "react";
import "./styles/App.scss";
import NavBar from "./common/NavBar/NavBar";
import Home from "./page/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import phone from "./assets/icons/phone.svg";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <PhoneSticky>
        <a href="#"> 11 2345 6789 </a>
      </PhoneSticky>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/2">
          <ItemDetailContainer idToShow={2} />
        </Route>
      </Switch>
    </BrowserRouter>
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
