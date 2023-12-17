import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { filmsDataReducer } from './film-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  filmsData: filmsDataReducer,
});

export type InitialState = ReturnType<typeof rootReducer>;
