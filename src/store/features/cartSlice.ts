import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"
import _ from 'lodash'

import { ICartItem } from '../../types';

interface CartState {
  items: ICartItem[];
}
const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action:PayloadAction<{id: number}> ) => {
      _.remove(state.items, item => item.product.id === action.payload.id)
    }
  },
});


export default CartSlice.reducer;
export const { add, remove } = CartSlice.actions;

