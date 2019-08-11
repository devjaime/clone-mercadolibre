import React, { Component } from 'react';
import axios from 'axios';

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
            <ProductosContext.Provider
                value={{
                    productos: this.state.productos,
                    obtenerProductos : this.obtenerProductos
                }}
            >
                {this.props.children}
            </ProductosContext.Provider>
         );
    }
}
 
export default ProductosProvider;