import { useEffect } from 'react'

import { fetchProducts } from '../../store/features/productSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {ICartItem, Product} from '../../types';

type ReturnType = {
  isLoading: boolean
  products:  Product[],
  cartItems: ICartItem[],
};

export const useProducts = (): ReturnType => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const isLoading = products.isLoading;
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return {
    isLoading,
    products: products.data,
    cartItems
  }
}
