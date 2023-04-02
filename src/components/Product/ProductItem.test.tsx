import { screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import ProductItem from './ProductItem';

import {render } from '../../utils/test';


const productMock = {
  id: 4,
    title: 'Mens Cotton Jacket',
    price: 12,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
}


test('button enable', () => {
  render(<ProductItem {...productMock}/>);
  const button = screen.getByRole('button');
  expect(button).not.toHaveAttribute('disabled');
});

test('button disabled', () => {
  render(<ProductItem {...productMock} disabled={true}/>);
  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('disabled');
});