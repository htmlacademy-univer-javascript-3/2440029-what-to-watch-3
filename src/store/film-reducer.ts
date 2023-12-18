import { createReducer } from '@reduxjs/toolkit';
import { FilmShortInfo, FilmFullInfo, PromoFilmInfo } from '../types/films';
import { fetchMovies, fetchFilmById, fetchPromoFilm, fetchFavoriteFilms } from './api-action';
import { getMoviesByGenre, setGenre, setMoviesByGenre, showMore } from './action';

export const SHOWING_FILMS_COUNT = 8;


export interface FilmsDataState {
    allFilms: FilmShortInfo[];
    currentFilm: FilmFullInfo | null;
    isLoading: boolean;
    errorMsg: string | null;
    genre: string;
    displayedFilmsCount: number;
    filteredFilms: FilmShortInfo[];
    promoFilm: PromoFilmInfo | null;
    favoriteFilms: FilmShortInfo[];
}

const initialState: FilmsDataState = {
  allFilms: [],
  currentFilm: null,
  isLoading: false,
  errorMsg: null,
  genre: 'All genres',
  displayedFilmsCount: SHOWING_FILMS_COUNT,
  filteredFilms: [],
  promoFilm: null,
  favoriteFilms: [],
};

export const filmsDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMovies.pending, (state) => {
    state.isLoading = true;
    state.errorMsg = null;
  })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.allFilms = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error.message || 'Failed to load movies';
    })
    .addCase(fetchFilmById.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchFilmById.fulfilled, (state, action) => {
      state.currentFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFilmById.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error.message || 'Failed to load movie description';
    })
    .addCase(getMoviesByGenre, (state) => {
      state.errorMsg = null;
      if (state.genre === 'All genres') {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.displayedFilmsCount = SHOWING_FILMS_COUNT;
    })
    .addCase(showMore, (state) => {
      state.displayedFilmsCount = Math.min(state.displayedFilmsCount + SHOWING_FILMS_COUNT, state.allFilms.length);
    })
    .addCase(setMoviesByGenre, (state, action) => {
      state.filteredFilms = action.payload;
    })
    .addCase(fetchPromoFilm.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPromoFilm.fulfilled, (state, action) => {
      state.promoFilm = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPromoFilm.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.error.message || 'Failed to load promo movie';
    })
    .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});
