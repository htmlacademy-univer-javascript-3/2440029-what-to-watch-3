import { createAction } from '@reduxjs/toolkit';
import { FilmShortInfo } from '../types/films';
import { AuthStatus } from '../types/auth';


export const setGenre = createAction<string>('setGenre');

export const getMoviesByGenre = createAction<string>('getMovies');

export const showMore = createAction('showMore');

export const setMoviesByGenre = createAction<FilmShortInfo[]>('setMoviesByGenre');

export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
