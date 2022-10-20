import { createSelector } from '@reduxjs/toolkit';

const categories = (state) => state.products.categories;
const loading = (state) => state.products.loading;

export const categoriesSelector = createSelector(
  categories,
  (categories) => categories
);
export const loadingSelector = createSelector(loading, (loading) => loading);
