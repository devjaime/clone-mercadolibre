import React, { Component } from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const ProductosContext = React.createContext();
export const ProductosConsumer = ProductosContext.Consumer;


class ProductosProvider extends Component {

    state = { 
        productos : []
    }

    obtenerProductos = async (busqueda) => {
        let url = `https://api.mercadolibre.com/sites/MLC/search?q=${busqueda.nombre}`;
        // consultar la API con la URL
        const productos = await axios(url);
      
        this.setState({
            productos : productos.data.results
        })
    }

    render() { 
        return (
          <ReactCSSTransitionGroup n
          transitionName="foo" 
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}>
           
           <ProductosContext.Provider
            value={{
              productos: this.state.productos,
              obtenerProductos: this.obtenerProductos
            }}
          >
            {this.props.children}
          </ProductosContext.Provider>
        </ReactCSSTransitionGroup> 
         
        );
    }
}
 
export default ProductosProvider;