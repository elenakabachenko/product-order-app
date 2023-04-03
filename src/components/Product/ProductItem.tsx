import React from 'react';

import AddToCart from '../../assets/add-to-cart.svg';
import { add } from '../../store/features/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { Product } from '../../types';

const ProductItem = (props:Product) => {
  const dispatch = useAppDispatch();


  return (
    <li className={`product-item ${props.disabled && 'disabled'}`}>
      <div className="product-item__content-wrapper">
          <span className="product-item__title">{props.title}</span>
        <div className="product-item__info">
          <span className="product-item__price">{props.price} €</span>
          <button className="product-item__add-to-cart" disabled={props.disabled} onClick={() => dispatch(add({product: {...props}})) }>
            <img src={AddToCart} alt="Add to cart" />
          </button>
        </div>
      </div>

    </li>
  );

}

export default ProductItem;