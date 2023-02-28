import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import motorcyclesReducer from './motorcycles';

const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
