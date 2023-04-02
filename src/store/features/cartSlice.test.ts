import { add, remove } from './cartSlice';

import { store } from '../';

test('Initial state should be empty', () => {
  const state = store.getState().cart;
  const initialCartCount = state.items.length;

  expect(state.items.length).toBe(initialCartCount);
});

test('Adds a new product in cart', () => {
  let state = store.getState().cart;
  const initialCartCount = state.items.length;

  store.dispatch(add({
    product: {
      id: 4,
      title: 'Mens Cotton Jacket',
      price: 12,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    }
  }));
  state = store.getState().cart;
  const newlyAddedProduct = state.items.find((item) => item.product?.id === 4);
  expect(newlyAddedProduct?.product?.title).toBe('Mens Cotton Jacket');
  expect(newlyAddedProduct?.product?.price).toBe(12);
  expect(state.items.length).toBeGreaterThan(initialCartCount);
});

test('Remove product from cart', () => {
  let state = store.getState().cart;
  const initialCartCount = state.items.length;

  store.dispatch(remove({id: 4}));
  state = store.getState().cart;

  expect(state.items.length).toBeLessThan(initialCartCount); // Checking if new length smaller than inital length, which is 3
});