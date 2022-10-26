import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductsApi from '../../api/productsApi';

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ProductsApi.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await ProductsApi.getProducts(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
