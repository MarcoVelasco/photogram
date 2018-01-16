import React, { Component } from 'react';
//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
//Firebase
import { database } from '../firebase';
//Bootstrap
import {Jumbotron, Button} from 'react-bootstrap';
import Login from './Login';
import SignIn from './SignIn';
class App extends Component {
  constructor(){
    super();
    this.state = {
      seleccion : "INICIO"
    };
    this.handleLog = this.handleLog.bind(this);
    this.handleSign = this.handleSign.bind(this);
  }
renderApp(){
  if(this.state.seleccion === "INICIO"){
    return(
      <p>Selecciona una de las opciones anteriores </p>
    )
  }
  else if(this.state.seleccion === "LOGIN"){
    return(
      <Login/>
    )
  }
  else if(this.state.seleccion === "REGISTRARSE"){
    return(
      <SignIn/>
    )
  }
}
handleLog(e){
  this.setState({ seleccion : "LOGIN"});
}
handleSign(e){
  this.setState({ seleccion : "REGISTRARSE"});
}
/*  componentWillMount(){
    database.ref('Usuarios').on('child_added', snapshot=>{
      this.setState({ usuarios : this.state.usuarios.concat(snapshot.val()) })
    })
 }
*/
  render() {
    return (
      <div className="App">
        {
          <div>
            <center>
              <Jumbotron>
                <h1> Ao(?) </h1>
                <p>
                  <Button bsStyle="primary" onClick={this.handleLog}>Iniciar Sesion </Button> {'       '}
                  <Button bsStyle="default" onClick={this.handleSign}>Registrarse </Button>
                </p>
                {this.renderApp()}
              </Jumbotron>
            </center>
          </div>

        }
      </div>
    );
  }
}

export default App;
