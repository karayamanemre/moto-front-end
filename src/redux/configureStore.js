import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import motorcyclesReducer from './motorcycles';
import userReducer from './users';
import reservationsReducer from './reservations';

const rootReducer = combineReducers({
  motorcycles: motorcyclesReducer,
  user: userReducer,
  reservations: reservationsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
