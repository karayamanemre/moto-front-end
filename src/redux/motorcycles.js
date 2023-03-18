import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_MOTORCYCLE = 'moto-mate/motorcycles/ADD_MOTORCYCLE';
const GET_MOTORCYCLE = 'moto-mate/motorcycles/GET_MOTORCYCLE';
const DELETE_MOTORCYCLE = 'moto-mate/motorcycles/DELETE_MOTORCYCLE';
const initialState = [];

export const fetchMotorcycle = createAsyncThunk(GET_MOTORCYCLE, async () => {
  const data = await fetch('https://motomate.fly.dev/api/v1/motorcycles');
  const response = await data.json();
  const motos = response.map((motorcycle) => ({
    id: motorcycle.id,
    name: motorcycle.name,
    description: motorcycle.description,
    img_url: motorcycle.image_url,
    model_year: motorcycle.model_year,
    price: motorcycle.price,
    engine: motorcycle.engine,
    fuel: motorcycle.fuel_type,
  }));
  return motos;
});

export const addMotorcycle = (motorcycle) => async (dispatch) => {
  const formData = new FormData();
  Object.entries(motorcycle).forEach(([key, value]) => {
    formData.append(`motorcycle[${key}]`, value);
  });

  try {
    const res = await axios.post(
      'https://motomate.fly.dev/api/v1/motorcycles',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    dispatch({
      type: ADD_MOTORCYCLE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteMotorcycle = createAsyncThunk(
  'moto-mate/motorcycles/deleteMotorcycle',
  async (id) => {
    await axios.delete(`https://motomate.fly.dev/api/v1/motorcycles/${id}`);
    return id;
  },
);

const motorcyclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MOTORCYCLE}/fulfilled`:
      return action.payload;
    case ADD_MOTORCYCLE:
      return [...state, action.payload];
    case `${DELETE_MOTORCYCLE}/fulfilled`:
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default motorcyclesReducer;
