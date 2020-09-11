import React from "react";
import "./styles/App.scss";
import NavBar from "./common/NavBar/NavBar";
import Footer from "./common/Footer/Footer";
import Home from "./page/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import phone from "./assets/icons/phone.svg";
import Cart from "./page/Cart/Cart";
import { ListProvider } from "./context/CartContext";

function App() {
  return (
    <ListProvider value={[]} min={1} max={10} initial={0}>
      <BrowserRouter>
        <NavBar />
        <PhoneSticky>
          <a href="tel:11 2345 6789"> 11 2345 6789 </a>
        </PhoneSticky>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/plantas/">
            <ItemList />
          </Route>
          <Route exact path="/plantas/:categoryId">
            <ItemList />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ListProvider>
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
