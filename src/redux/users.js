import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action creator for logging in user
export const login = createAsyncThunk('user/login', async (username) => {
  const response = await axios.post('http://localhost:3000/api/v1/login', {
    username: username,
  });
  return response.data;
});

export const setCurrentUser = (currentUser) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: currentUser,
  };
};

// Async action creator for registering a new user
export const register = createAsyncThunk(
  'user/register',
  async ({ name, username }) => {
    const response = await axios.post('http://localhost:3000/api/v1/register', {
      name: name,
      username: username,
    });
    return response.data;
  },
);

// Get the stored values from local storage
const storedUsername = localStorage.getItem('username');
const storedToken = localStorage.getItem('token');

// Define the initial state based on whether the stored values exist
const initialState = {
  currentUser: storedUsername || null,
  isLoggedIn: !!storedToken,
  isLoading: false,
  error: null,
};

// Slice for user
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
