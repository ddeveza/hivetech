import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getProducts } from './asyncThunks';

const initialState = {
  categories: [],
  products: null,
  loading: false,
  success: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.categories = payload;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.error = null;
      state.success = false;
      state.loading = true;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = { payload };
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.products = payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.error = null;
      state.success = false;
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = { payload };
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
