import React from 'react';
import Header from './components/Header';
import ListaProductos from './components/ListaProductos';
import ProductosProvider from './context/ProductosContext';

function App() {
  return (
    <ProductosProvider>
     <Header />
            <div className="uk-container">
                <ListaProductos />
            </div>
    </ProductosProvider>
  );
}

export default App;
