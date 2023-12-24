import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthResponse, AuthStatusResponse } from '../types/auth';
import { FilmFullInfo, FilmReview, FilmShortInfo, PromoFilmInfo } from '../types/films';
import { InitialState } from './reducer';

export const fetchMovies = createAsyncThunk<FilmShortInfo[], void, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFilms',
  async (_, { extra }) => {
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

export const fetchFilmById = createAsyncThunk<FilmFullInfo, string, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFilmById',
  async (id, { extra }) => {
    const { data } = await extra.get<FilmFullInfo>(`/films/${id}`);
    return data;
  }
);

export const fetchFilmReviews = createAsyncThunk<FilmReview[], string, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFilmReviews',
  async (id, { extra }) => {
    const { data } = await extra.get<FilmReview[]>(`/comments/${id}`);
    return data;
  }
);

export const fetchSimilarFilms = createAsyncThunk<FilmShortInfo[], string, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchSimilarFilms',
  async (id, { extra }) => {
    const { data } = await extra.get<FilmShortInfo[]>(`/films/${id}/similar`);
    return data;
  }
);

export const postReview = createAsyncThunk<FilmReview, { id: string; comment: string; rating: number }, { state: InitialState; extra: AxiosInstance }>(
  'films/postReview',
  async ({ id, comment, rating }, { extra }) => {
    const { data } = await extra.post<FilmReview>(`/comments/${id}`, { comment, rating });
    return data;
  }
);

export const fetchFavoriteFilms = createAsyncThunk<FilmShortInfo[], void, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchFavoriteFilms',
  async (_, { extra }) => {
    const { data } = await extra.get<FilmShortInfo[]>('/favorite');
    return data;
  }
);

export const postFavoriteFilmByAction = createAsyncThunk<FilmShortInfo, {id: string; action: number}, { state: InitialState; extra: AxiosInstance }>(
  'films/postFavoriteFilm',
  async ({id, action}, { extra }) => {
    const { data } = await extra.post<FilmShortInfo>(`/favorite/${id}/${action}`);
    return data;
  }
);

export const fetchPromoFilm = createAsyncThunk<PromoFilmInfo, void, { state: InitialState; extra: AxiosInstance }>(
  'films/fetchPromoFilm',
  async (_, { extra }) => {
    const { data } = await extra.get<PromoFilmInfo>('/promo');
    return data;
  }
);
