import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Ball from "./images/ball.png";

function App() {
  return (
    <div className="App">
      <img src={Ball} alt="logo" />
      <input placeholder="Enter a 'Yes' or 'No' question" />
      <button className="button">Fortell</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
