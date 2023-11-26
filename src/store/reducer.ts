import { createReducer } from '@reduxjs/toolkit';
import { MovieCardProps } from '../components/movie-card';
import { films } from '../mocks/films';
import { getMoviesByGenre, setGenre, showMore } from './action';

export const SHOWING_FILMS_COUNT = 8;


export interface FilmsState{
    genre: string;
    films: MovieCardProps[];
    displayedFilmsCount: number;
}


export const RootState: FilmsState = {
  genre: 'All genres',
  films: [],
  displayedFilmsCount: SHOWING_FILMS_COUNT,
};


export const filmsReducer = createReducer(RootState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
    state.displayedFilmsCount = SHOWING_FILMS_COUNT;
  });
  builder.addCase(getMoviesByGenre, (state) => {
    state.films = films.filter((film) => {
      if(state.genre === 'All genres'){
        return true;
      }
      return film.genre === state.genre;
    });
  });
  builder.addCase(showMore, (state) => {
    state.displayedFilmsCount = Math.min(state.displayedFilmsCount + SHOWING_FILMS_COUNT, state.films.length);
  });
});

