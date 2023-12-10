/* eslint-disable */
import axios from 'axios';

const BASE_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const getApi = () => {
  const api = axios.create({ baseURL: BASE_URL, timeout: REQUEST_TIMEOUT });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('user_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers['X-Token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        throw new Error(`Error 401 occurred: ${ error.response.data.error}`);
      }
      return Promise.reject(error);
    }
  );

  return api;
};
