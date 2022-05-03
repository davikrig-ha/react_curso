import React, { Component } from "react";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="container">
        <img className="img"  src={require("./assets/cronometro.png")} alt="image" />
        <a className="timer">0.0</a>
        <div className="area">
          <a>Iniciar</a>
          <a>Parar</a>
        </div>
      </div>
    );
  }
}

export default App;
