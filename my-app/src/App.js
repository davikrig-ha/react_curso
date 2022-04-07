import React, {Component} from "react";


class Balkans extends Component {
  render() {
    return(
     <div>
       <h2>{this.props.name}</h2>
       <h2>Lingua: {this.props.language}</h2>
       <img class="img" src={this.props.image} alt="" />
     </div>
    );
  }
}

function App(){
    return( 
        <div>
          <h1>The Balkans!</h1>
          <Balkans name="Sérvia" language="Sérvio" image={require('./images/Servia.png')}/>
          <Balkans name="Bósnia e Herzegovina" language="Sérvio" image={require('./images/Bósnia.png')}/>
          <Balkans name="Bulgária" language="Bulgaro" image={require('./images/Bulgária.png')}/>
          <Balkans name="Grécia" language="Grego" image={require('./images/Grécia.png')}/>
          <Balkans name="Macedônia" language="Mecedonio" image={require('./images/Macedônia.png')}/>
          <Balkans name="Albânia" language="Albanes" image={require('./images/Albânia.png')}/>
          <Balkans name="Kosovo" language="Sérvio" image={require('./images/kosovo.png')}/>
          <Balkans name="Turquia" language="Turco" image={require('./images/Turquia.png')}/>
          <Balkans name="Croácia" language="Croata" image={require('./images/Croácia.png')}/>
          <Balkans name="Romênia" language="Romeno" image={require('./images/Romênia.png')}/>
          <Balkans name="Eslovênia" language="Esloveno" image={require('./images/Eslovênia.png')}/>
        </div> 
    )
}

export default App;