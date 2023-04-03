import React from 'react';

import RemoveIcon from '../../assets/icons/delete.svg';
import {remove} from '../../store/features/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import {ICartItem} from '../../types';



const CartItem = (props: ICartItem) => {
  const dispatch = useAppDispatch();

  return (
    <li className="cart-item">
      <div className="cart-item__content-wrapper">
        <div className="cart-item__img-wrapper">
          <img className="cart-item__image" src={props.product?.image} alt={props.product?.title}/>
        </div>
        <span className="cart-item__title">{props.product?.title}</span>
        <span className="cart-item__price">{props.product?.price?.toFixed(2)} €</span>
        <button onClick={() =>  dispatch(remove({id:props.product?.id }))} className="cart-item__remove"><img src={RemoveIcon} alt="remove"/></button>
      </div>
    </li>
  );

}

export default CartItem;