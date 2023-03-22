import { configureStore, combineReducers } from '@reduxjs/toolkit';
import personsReducer from './slices/persons-slice';

const rootReducer = combineReducers({
  persons: personsReducer,
})

const store = configureStore({ 
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;