import { configureStore } from '@reduxjs/toolkit';
import { getApi } from '../services/api';
import { rootReducer } from './reducer';

const apiClient = getApi();

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiClient
    }
  })
});

export type FilmDispatch = typeof Store.dispatch;
