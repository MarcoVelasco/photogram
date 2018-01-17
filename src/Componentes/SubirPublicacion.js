import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {storeDB, db} from '../firebase';
class SubirPublicacion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            descripcion : "",
            foto : null,
            completed: 0
         }
        this.handleDescripcion = this.handleDescripcion.bind(this);
        this.handleImagen = this.handleImagen.bind(this);
        this.handleSubirImagen = this.handleSubirImagen.bind(this);
    }
    handleDescripcion(e){
        this.setState({descripcion : e.target.value});
    }
    handleImagen(e){
        this.setState({foto : e.target.files[0]});
    }
    getDatePro(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
    handleSubirImagen(e){
        const desc = this.state.descripcion;
        const up = this.props.user.nombre;
        const fechita =this.getDatePro();

        const storageRef = storeDB.ref('fotos/'+ this.state.foto.name);
        const task = storageRef.put(this.state.foto);
        task.on('state_changed', snapshot=>{
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            this.setState({completed:progress});
            console.log("Upload: %" + progress);
        }, function(error){
            console.log(error.message);
        },function(){
            var imageURL = task.snapshot.downloadURL;
            console.log("Photo uploaded");
            var pub = {
                id: Date.now(),
                image: imageURL,
                descripcion: desc,
                uploader: up,
                fecha: fechita
            }
            db.ref("publicaciones/"+pub.id).set(pub);
        })
    }
    render() { 
        return (  
            <div>
                <Form inline>
                    <FormGroup controlId="Descripcion">
                        <ControlLabel>Descripcion </ControlLabel>{' '}
                        <textarea onChange={this.handleDescripcion} type="textarea" cols="40" rows="5"></textarea>
                        
                        <input type='file' onChange={this.handleImagen}/>    
                    </FormGroup>{' '}
                    <Button onClick={this.handleSubirImagen}>Subir Imagen</Button>

                </Form>
            </div>
        )

    }
}
 
export default SubirPublicacion;