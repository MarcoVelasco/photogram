import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import SubirPublicacion from './SubirPublicacion';
class Perfil extends Component {
    constructor(props){
        super(props);

    }
    tate = {}
    render() {
        return(
            <div>
                <p>Nombre: {this.props.usuario.nombre} </p>
                <p>Usuario: {this.props.usuario.usuario}</p>
                <SubirPublicacion user = {this.props.usuario}/>

            </div>
        );
    }
}
 
export default Perfil;