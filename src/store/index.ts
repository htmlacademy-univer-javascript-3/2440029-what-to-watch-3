import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './reducer';
import { getApi } from '../services/api';

const apiClient = getApi();


export const Store = configureStore({
  reducer: {
    films: filmsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiClient
    }
  })
});

export type FilmDispatch = typeof Store.dispatch;
