import { createReducer } from '@reduxjs/toolkit';
import { getMoviesByGenre, setGenre, showMore, setMoviesByGenre, setAuthStatus } from './action';

import { FilmShortInfo } from '../types/films';
import { fetchMovies, checkAuthorization, login, logout } from './api-action';

import { AuthStatus, AuthResponse } from '../types/auth';


export const SHOWING_FILMS_COUNT = 8;


export interface FilmsState {
  genre: string;
  displayedFilmsCount: number;
  allFilms: FilmShortInfo[];
  filteredFilms: FilmShortInfo[];
  isLoading: boolean;
  errorMsg: string | null;
  authStatus: AuthStatus;
  authedUserInfo: AuthResponse | null;
}


export const RootState: FilmsState = {
  genre: 'All genres',
  allFilms: [],
  displayedFilmsCount: SHOWING_FILMS_COUNT,
  filteredFilms: [],
  isLoading: false,
  errorMsg: null,
  authStatus: AuthStatus.NOT_AUTHENTICATED,
  authedUserInfo: null,
};


export const filmsReducer = createReducer(RootState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
    state.displayedFilmsCount = SHOWING_FILMS_COUNT;
  });
  builder.addCase(getMoviesByGenre, (state) => {
    state.errorMsg = null;
    if (state.genre === 'All genres') {
      state.filteredFilms = state.allFilms;
    } else {
      state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
    }
  });
  builder.addCase(showMore, (state) => {
    state.displayedFilmsCount = Math.min(state.displayedFilmsCount + SHOWING_FILMS_COUNT, state.allFilms.length);
  });
  builder.addCase(setMoviesByGenre, (state, action) => {
    state.filteredFilms = action.payload;
  });
  builder.addCase(fetchMovies.pending, (state) => {
    state.isLoading = true;
    state.errorMsg = null;
  });
  builder.addCase(fetchMovies.fulfilled, (state, action) => {
    state.isLoading = false;
    state.allFilms = action.payload;
  });
  builder.addCase(fetchMovies.rejected, (state, action) => {
    state.isLoading = false;
    state.errorMsg = action.error.message || 'Failed to load movies';
  });
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(checkAuthorization.pending, (state) => {
    state.authStatus = AuthStatus.PENDING;
  });
  builder.addCase(checkAuthorization.fulfilled, (state, action) => {
    state.authStatus = action.payload.isAuthorized ? AuthStatus.AUTHENTICATED : AuthStatus.NOT_AUTHENTICATED;
    state.authedUserInfo = action.payload.content || null;
  });
  builder.addCase(checkAuthorization.rejected, (state) => {
    state.authStatus = AuthStatus.NOT_AUTHENTICATED;
    state.authedUserInfo = null;
  });
  builder.addCase(login.pending, (state) => {
    state.authStatus = AuthStatus.PENDING;
  });
  builder.addCase(login.fulfilled, (state, action) => {
    state.authStatus = AuthStatus.AUTHENTICATED;
    state.authedUserInfo = action.payload;
  });
  builder.addCase(login.rejected, (state) => {
    state.authStatus = AuthStatus.NOT_AUTHENTICATED;
    state.authedUserInfo = null;
  });
  builder.addCase(logout.fulfilled, (state) => {
    state.authStatus = AuthStatus.NOT_AUTHENTICATED;
    state.authedUserInfo = null;
  });
});

