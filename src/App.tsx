import React from 'react';

import Cart from './components/Cart/Cart';
import ProductList from './components/Product/ProductList';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
