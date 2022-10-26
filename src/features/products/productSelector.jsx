import { createSelector } from '@reduxjs/toolkit';

const categories = (state) => state.products.categories;
const loading = (state) => state.products.loading;
const products = (state) => state.products.products;

export const categoriesSelector = createSelector(
  categories,
  (categories) => categories
);
export const loadingSelector = createSelector(loading, (loading) => loading);

export const productSelector = createSelector(
  products,
  (products) => products?.results ?? []
);
