import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../api/userAPI';
const initialState = {
  users: null,
  loading: false,
  error: null,
  success: false,
};

export const signup = createAsyncThunk(
  'users/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.signup(data);
      return response.data;
    } catch (error) {
      if (!error.response.data) {
        return rejectWithValue(error.response.message);
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const signin = createAsyncThunk(
  'users/signin',
  async (data, { rejectWithValue }) => {
    try {
      const response = await userAPI.signin(data);
      return response.data;
    } catch (error) {
      if (!error.response.data) {
        return rejectWithValue(error.response.status);
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: initialState,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.users = payload;
      localStorage.setItem('users', JSON.stringify(payload));
    });
    builder.addCase(signup.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.success = false;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.success = true;
      state.users = payload;
      localStorage.setItem('users', JSON.stringify(payload));
    });
    builder.addCase(signin.pending, (state, { payload }) => {
      state.error = null;
      state.loading = true;
      state.success = false;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
