import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, AuthStatusResponse } from '../types/auth';
import { FilmShortInfo } from '../types/films';
import { InitialState } from './state';
import { AxiosInstance } from 'axios';

export const fetchMovies = createAsyncThunk<FilmShortInfo[], void, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFilms',
  async (_, { extra }) => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    const { data } = await extra.get<FilmShortInfo[]>('/films');
    return data;
  }
);

export const checkAuthorization = createAsyncThunk<AuthStatusResponse, void, { state: InitialState; extra: AxiosInstance }>(
  'user/checkAuth',
  async (_, { extra }) => {
    try {
      const { data } = await extra.get<AuthResponse>('/login');
      return { isAuthorized: true, content: data };
    } catch (err) {
      return { isAuthorized: false };
    }
  }
);

export const login = createAsyncThunk<AuthResponse, { email: string; password: string }, { state: InitialState; extra: AxiosInstance }>(
  'user/login',
  async ({ email, password }, { extra }) => {
    const { data } = await extra.post<AuthResponse>('/login', { email, password });
    localStorage.setItem('user_token', data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, void, { state: InitialState; extra: AxiosInstance }>(
  'user/logout',
  async (_, { extra }) => {
    await extra.delete('/logout');
    localStorage.removeItem('user_token');
  }
);
