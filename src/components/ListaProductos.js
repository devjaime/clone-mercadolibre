import React from 'react';
import Producto from './Producto';
import {ProductosConsumer } from '../context/ProductosContext';

//uk-child-width-1-1@m si quiero hacerlo de 3 tarjetas o más solo debo cambiarlo a 1-3 
const ListaProductos = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <ProductosConsumer>
                {(value) => {
                    return value.productos.map(producto => (
                        <Producto 
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                }}
            </ProductosConsumer>
        </div>
    );
}
 
export default ListaProductos;