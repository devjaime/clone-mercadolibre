import React from 'react';
import Header from './components/Header';
import ListaProductos from './components/ListaProductos';
import ProductosProvider from './context/ProductosContext';
import Spinner from './components/Spinner';
function App() {

  return (
    
    <ProductosProvider>
     <Header />
            <div className="uk-container">
                
                <ListaProductos />
                <Spinner></Spinner>
                
            </div>
    </ProductosProvider>
  );
}

export default App;
