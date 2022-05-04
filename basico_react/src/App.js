import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    };

    this.cadastrar = this.cadastrar.bind(this);

  }

  cadastrar(){
   const {nome, email, senha} = this.state;

   if(nome !== '' && email !== '' && senha !== ''){
     alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`);
   }else{
     this.setState({error: 'Ops! O governo te achou!'})
   }
  }
 


  render() {
    return (
      <div>
        <h2>Novo Usuario</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <h4>Nome</h4>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/>
          <br/>
          <h4>Email</h4>
          <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
           <br/>
           <h4>Senha</h4>
          <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;