import { configureStore } from '@reduxjs/toolkit';

import { CartSlice } from './features/cartSlice';
import { ProductSlice } from './features/productSlice';

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;