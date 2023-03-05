import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_MOTORCYCLE = 'moto-mate/motorcycles/ADD_MOTORCYCLE';
const GET_MOTORCYCLE = 'moto-mate/motorcycles/GET_MOTORCYCLE';
const DELETE_MOTORCYCLE = 'moto-mate/motorcycles/DELETE_MOTORCYCLE';
const initialState = [];

export const fetchMotorcycle = createAsyncThunk(GET_MOTORCYCLE, async () => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/motorcycles');
  const response = await data.json();
  const motoList = Object.keys(response);
  const motos = [];
  motoList.map((key) =>
    motos.push({
      id: response[key].id,
      name: response[key].name,
      description: response[key].description,
      img_url: response[key].img_url,
      model_year: response[key].model_year,
      price: response[key].price,
      engine: response[key].engine,
      fuel: response[key].fuel_type,
    }),
  );
  return motos;
});

export const addMotorcycle = (motorcycle) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/motorcycles', motorcycle)
    .then((res) => {
      dispatch({
        type: ADD_MOTORCYCLE,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

export const deleteMotorcycle = createAsyncThunk(
  'moto-mate/motorcycles/deleteMotorcycle',
  async (id) => {
    await axios.delete(`http://127.0.0.1:3000/api/v1/motorcycles/${id}`);
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
