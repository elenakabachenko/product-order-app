import React from 'react';

import ProductItem from './ProductItem';
import {useProducts} from './useProducts';

import { Product } from '../../types';

const ProductList = () => {
  const { products, cartItems }  = useProducts();

  return (
    <div className="rounded-md border shadow flex gap-3">
      <ul className="product-list">
        {products.map((product: Product) => (<ProductItem disabled={!!cartItems.find(item => item.product.id === product.id)} key={product.id} {...product} />))}
      </ul>
    </div>
  )
};

export default ProductList;