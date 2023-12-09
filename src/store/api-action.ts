import { createAsyncThunk } from '@reduxjs/toolkit';

import { FilmShortInfo } from '../types/films';

import { InitialState } from './state';
import { AxiosInstance } from 'axios';


export const fetchMovies = createAsyncThunk<FilmShortInfo[], void, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFilms',
  async (_, { extra }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const { data } = await extra.get<FilmShortInfo[]>('/films');
    return data;
  });
