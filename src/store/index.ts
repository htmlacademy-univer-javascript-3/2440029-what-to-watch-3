import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './reducer';


export const Store = configureStore({
  reducer: {
    films: filmsReducer
  }
});
