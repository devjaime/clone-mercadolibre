import React from 'react';
import ProductoReaccion from './ProductoReaccion'
const Producto = ({producto}) => {
     
    // extraer el texto
    let { text } = producto.title;
    if(text) {
        if(text.length > 250) {
            text = text.substr(0, 250);
        }
    } else {
        text = null;
    }

    return ( 
        <div>
            <div className="uk-card uk-card-default uk-card-hover ">
                <div className="uk-card-media-top">
                    {producto.thumbnail 
                        ? <img src={producto.thumbnail} alt={producto.title} />
                        : null }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{producto.title}</h3>
                    {text}
                </div>
                <div className="uk-card-body">Precio 
                    <div className="uk-card-title">${producto.price}</div>
                    
                </div>            
                <div className="uk-card-footer navBarDegradeitor ">
                    <a target="_blank" rel="noopener noreferrer " href={producto.permalink} className="uk-button uk-button-primary navBar">
                        Más Información
                    </a>
                </div>
            </div>
            <div>
                <ProductoReaccion producto={producto}/>
            </div>

        </div>
     );
}
 
export default Producto;