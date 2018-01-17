import React, { Component } from 'react';
import {db} from '../firebase';
import _ from 'lodash';
import { Carousel, Grid, Col, Row, } from 'react-bootstrap';
import Publicacion from './Publicacion';
class Publicaciones  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            publicaciones : []
         }
    }
    componentDidMount() {
        db.ref('publicaciones').on('child_added', snapshot =>{
            this.setState({ publicaciones : this.state.publicaciones.concat(snapshot.val())});
        });
    }
    renderPublicaciones(){
        return(
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                    {
                        _.map(this.state.publicaciones,(p)=>{
                            return(
                                <div key={p.id}>
                                <Publicacion pub={p}/>
                                </div>
                            )
                        })
                    }
                    </Col>
                </Row>
            </Grid>
        );
    }
    render() { 
        return (
            <div>
            {this.renderPublicaciones()}
            </div>
         );
    }
}
 
export default Publicaciones;