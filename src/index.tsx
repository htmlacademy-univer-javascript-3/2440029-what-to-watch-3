import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import {Store} from './store/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promoFilm = {
  promoTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoReleaseDate: '2014',
};

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App
        promoTitle={promoFilm.promoTitle}
        promoGenre={promoFilm.promoGenre}
        promoReleaseDate={promoFilm.promoReleaseDate}
        films={films}
      />
    </Provider>
  </React.StrictMode>
);
