import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';

class Publicacion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div key={this.props.pub.id}>
                <Thumbnail src={this.props.pub.image} alt="242x200">
					<h3>{this.props.pub.uploader}</h3>
					<p>
						{this.props.pub.descripcion}
					</p>
				</Thumbnail>
            </div>
        );
    }
}
 
export default Publicacion;