import { createReducer } from '@reduxjs/toolkit';
import { getMoviesByGenre, setGenre, showMore, setMoviesByGenre } from './action';

import { FilmShortInfo } from '../types/films';
import { fetchMovies } from './api-action';


export const SHOWING_FILMS_COUNT = 8;


export interface FilmsState {
  genre: string;
  displayedFilmsCount: number;
  allFilms: FilmShortInfo[];
  filteredFilms: FilmShortInfo[];
  isLoading: boolean;
  errorMsg: string | null;
}


export const RootState: FilmsState = {
  genre: 'All genres',
  allFilms: [],
  displayedFilmsCount: SHOWING_FILMS_COUNT,
  filteredFilms: [],
  isLoading: false,
  errorMsg: null,
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
});

