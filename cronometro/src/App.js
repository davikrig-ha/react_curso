import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    }

    this.iniciar = this.iniciar.bind(this);
    this.parar = this.parar.bind(this);
  }

  iniciar() {
   
  }

  parar() {

  }

  render() {
    return (
      <div className="container">
        {/* <img className="img"  src={require("./assets/cronometro.png").default} alt="" /> */}
        <a href="/#" className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="area">
          <a onClick={this.iniciar}  className="btn" href="/#">Iniciar</a>
          <a onClick={this.parar}  className="btn" href="/#">Parar</a>
        </div>
      </div>
    );
  }
}

export default App;
