import React from "react";
import "./App.css";
import NavBar from "./common/NavBar/NavBar";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Home greeting="Mensaje de prueba"></Home>
    </div>
  );
}

export default App;
