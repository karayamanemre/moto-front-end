import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_RESERVATIONS = 'moto-frontend/reservations/GET_RESERVATIONS';
const initialState = [];

export const fetchReservations = createAsyncThunk(
  GET_RESERVATIONS,
  async () => {
    const userId = localStorage.getItem('user_id');

    const data = await fetch(
      `http://127.0.0.1:3000/api/v1/reservations/user/${userId}`,
    );
    const response = await data.json();
    return response.data;
  },
);

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_RESERVATIONS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
