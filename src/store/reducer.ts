import { createReducer } from '@reduxjs/toolkit';
import { MovieCardProps } from '../components/movie-card';
import { films } from '../mocks/films';
import { getMoviesByGenre, setGenre } from './action';


export interface FilmsState{
    genre: string;
    films: MovieCardProps[];
}


export const RootState: FilmsState = {
  genre: 'All genres',
  films: []
};


export const filmsReducer = createReducer(RootState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(getMoviesByGenre, (state) => {
    state.films = films.filter((film) => {
      if(state.genre === 'All genres'){
        return true;
      }
      return film.genre === state.genre;
    });
  });
});

