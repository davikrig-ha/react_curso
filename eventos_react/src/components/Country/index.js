import React, {Component} from "react";

class Country extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        }
        this.confirm = this.confirm.bind(this);
    }

    confirm(){
        this.setState({nome: "Russia"})
    }

  render() {
    return (
      <div>
        <h2>{this.state.nome}</h2> 
        <button onClick={this.confirm}>Your Country</button>
        <button onClick={() => this.setState({nome: ''})}>Not Your Country</button>
      </div>
    )
  }
}

export default Country;