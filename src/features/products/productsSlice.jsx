import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from '../../api/productsApi';

const initialState = {
  categories: [],
  loading: false,
};

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    try {
      const data = await productsApi.getCategories();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.rejected, (state) => {});
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
