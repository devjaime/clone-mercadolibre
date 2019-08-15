import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    state = { 
        categorias : []
     }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {

        //let url = `https://api.mercadolibre.com/sites/MLA/categories`;
  

        let url = `https://api.mercadolibre.com/sites/MLA/categories`;
        let categorias = await axios.get(url);
        console.log(categorias);

        this.setState({
            categorias : categorias.data.categoria
        })

    }

    render() { 
        return ( 
            <CategoriasContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}
 
export default CategoriasProvider;