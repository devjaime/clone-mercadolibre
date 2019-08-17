import React, { Component } from 'react';
import FBPost from "./FB_Post";
import { Grid } from "@material-ui/core";


class ProductoReaccion extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            productos : [],
            post_obj: {
                createdBy: "Jaime Hernández",
                avatar:
                  "https://devjaime.github.io/images/jaime.png",
                description:
                  '',
                createdAt: Date.now(),
                likes: [
                  "Pedro",
                  "Diego",
                  "Juan",
                  "Antonio",
                  "Maria",
                  "Jesus",
                  "Alvaro",
                  "Marisol"
                ]
              }
        };
      }



    render() { 
        const paperStyle = { padding: "0px", margin: "0px" };
        const { post_obj } = this.state;
        
        return (
         
            <div>
              <Grid
                container
                style={paperStyle}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <div style={paperStyle}>
                  <FBPost post={post_obj} producto={this.props.producto}/>
                </div>
              </Grid>
            </div>
        );
    }
}
 
export default ProductoReaccion;