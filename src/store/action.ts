import { createAction } from '@reduxjs/toolkit';

export const setGenre = createAction<string>('setGenre');

export const getMoviesByGenre = createAction<string>('getMovies');
