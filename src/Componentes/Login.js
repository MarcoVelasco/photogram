import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {db} from '../firebase';
import Perfil from './perfil';
import Publicaciones from './Publicaciones';
class LogIn extends Component{
    constructor(){
        super();
        this.state = {
            user: null,
            getUser : "",
            getPass : ""
        }
        this.handleGetUser = this.handleGetUser.bind(this);
        this.handleGetPass = this.handleGetPass.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    handleGetUser(e){
        this.setState({ getUser : e.target.value });
    }
    handleGetPass(e){
        this.setState({ getPass : e.target.value });
    }

    handleLogIn(e){
        db.ref('Usuarios/'+ this.state.getUser).on('value', snapshot=>{
            this.setState({user: snapshot.val()})
        });
    }
    renderLogIn(){
        if(this.state.user === null){
            return(
                <Form inline>
                    <FormGroup controlId="getUser">
                        <ControlLabel>Usuario </ControlLabel>{' '}
                        <FormControl onChange={this.handleGetUser} type="text"/>
                    </FormGroup>{' '}
                    <FormGroup controlId="getPass">
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl onChange={this.handleGetPass} type="password"/>
                    </FormGroup>{' '}
                    <Button onClick={this.handleLogIn}>Iniciar Sesion</Button>
                </Form>
            );
        }
        else{
            return(
                <div>
                    <Perfil usuario={this.state.user}/>
                    <Publicaciones/>
                    <br></br>
                    <Button bsStyle="default" onClick={()=>{this.setState({user:null})}}>Cerrar Sesion </Button>
                </div>
            );
        }

    }
    render(){
        return(
            <div>
                {this.renderLogIn()}
            </div>
        );
    }
}
export default LogIn;