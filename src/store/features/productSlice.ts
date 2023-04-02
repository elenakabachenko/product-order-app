import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Product } from '../../types';

interface ProductState {
  data: Product[]
  isLoading: boolean
};

const initialState: ProductState = {
  data: [],
  isLoading: true
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=6");
    return response.json();
  },
);

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ProductSlice.reducer;