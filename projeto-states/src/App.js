import React, { Component } from "react";
import "./estilo.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ''
    };
    this.escotilha = this.escotilha.bind(this);
    this.frases = ["priviet tovarich", "go to kombat", "drive a tank"];
  }

  escotilha() {
    let state = this.state;
    let numero = Math.floor(Math.random() * this.frases.length)
    state.texto = this.frases[numero];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/t.jpg")} className="img" />
        <Botao acaoBtn={this.escotilha} />
        <h3 className="texto">{this.state.texto}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>Abrir Escotilha</button>
      </div>
    );
  }
}

export default App;
