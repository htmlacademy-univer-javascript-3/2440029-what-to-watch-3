import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { films } from './mocks/films';

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
    <App
      promoTitle={promoFilm.promoTitle}
      promoGenre={promoFilm.promoGenre}
      promoReleaseDate={promoFilm.promoReleaseDate} 
      films={films}
    />
  </React.StrictMode>
);
