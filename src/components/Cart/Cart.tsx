import _ from 'lodash';
import React, { useState } from 'react';


import CartItem from './CartItem';

import ChevronIcon from '../../assets/icons/chevron-down.svg'
import {useAppSelector} from '../../store/hooks';
import { ICartItem } from '../../types';


const Cart = () => {
  const items = useAppSelector((state) => state.cart?.items);
  const isLoading = useAppSelector((state) => state.products.isLoading);

  const [expand, setExpand] = useState<boolean>(false);

  if (isLoading) return null;

  return (
    <div className={`cart ${expand && 'expanded'}`} onClick={() => setExpand(!expand)}>
      <header className="cart-header">
        My Cart:
        <div className="cart-header-chevron"><img src={ChevronIcon} alt="arrow"/></div>
      </header>
      <ul className="cart-list">
        {items.map((item) => (<CartItem key={item.product?.id} {...item} />))}
      </ul>
      <footer className="cart-footer">
        <span><strong>TOTAL</strong> ({items?.length} productos)</span>
        <span>{_.sumBy(items, (item:ICartItem) => item.product.price).toFixed(2)} €</span>
      </footer>
    </div>
  )
}

export default Cart;