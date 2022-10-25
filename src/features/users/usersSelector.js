import { createSelector } from '@reduxjs/toolkit';

const status = (state) => state.users;

export const usersStatusSelector = createSelector(
  status,
  ({ loading, error, success }) => ({ loading, error, success })
);
