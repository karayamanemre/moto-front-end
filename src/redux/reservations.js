import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the initial state for reservations
const initialState = [];

// Define an async thunk to fetch reservations from the API
export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const userId = localStorage.getItem('id');
    const response = await fetch(
      `https://motomate-api.herokuapp.com/api/v1/users/${userId}/reservations`,
    );
    const data = await response.json();
    return data.data;
  },
);

// Define an async thunk to post a new reservation to the API
export const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (reservationData) => {
    const userId = localStorage.getItem('id');
    const motorcycle = JSON.parse(localStorage.getItem('motorcycle'));
    const motorcycleId = motorcycle.id;

    const response = await fetch(
      `https://motomate-api.herokuapp.com/api/v1/reservations/user/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...reservationData,
          user_id: userId,
          motorcycle_id: motorcycleId,
        }),
      },
    );
    const data = await response.json();
    return data.data;
  },
);

// Define an async thunk to delete a reservation from the API
export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation',
  async (reservationId) => {
    const response = await fetch(
      `https://motomate-api.herokuapp.com/api/v1/reservations/user/${reservationId}`, // include the reservationId in the URL
      {
        method: 'DELETE',
      },
    );
    const data = await response.json();
    return data;
  },
);

// Define the reservations slice of the Redux store
const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fetchReservations fulfilled action
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      return action.payload;
    });
    // Handle the postReservation fulfilled action
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    // Handle the deleteReservation fulfilled action
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      return state.filter(
        (reservation) => reservation.id !== action.payload.id,
      );
    });
  },
});

export default reservationsSlice.reducer;
