import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";
import {db} from '../firebase';
class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            nuevoNombre : "",
            nuevoUsuario : "",
            nuevaPass : ""
        }
        this.handleName = this.handleName.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleRegisterUser = this.handleRegisterUser.bind(this);
    }
    handleName(e){
        this.setState({nuevoNombre : e.target.value});
    }
    handlePass(e){
        this.setState({nuevaPass : e.target.value});
    }
    handleUser(e){
        this.setState({nuevoUsuario : e.target.value});
    }
    handleRegisterUser(){
        var newUser = {
            id : null,
            nombre : this.state.nuevoNombre,
            password : this.state.nuevaPass,
            usuario : this.state.nuevoUsuario
        };
        newUser.id = Date.now();
        db.ref('Usuarios/'+ newUser.usuario).set(newUser);
    }
    render(){
        return(
            <div>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Nombre </ControlLabel>{' '}
                        <FormControl onChange={this.handleName} type="text" placeholder="Nombre Propio" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineUser">
                        <ControlLabel>Usuario </ControlLabel>{' '}
                        <FormControl onChange={this.handleUser} type="text" placeholder="Usuario123" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Password </ControlLabel>{' '}
                        <FormControl onChange={this.handlePass} type="password" />
                    </FormGroup>{' '}
                    <Button onClick={this.handleRegisterUser} type="submit">Registrarse</Button>
                </Form>      
            </div>
        );
    }
}
export default SignIn;