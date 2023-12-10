import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { Store } from './store/';
import { checkAuthorization } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promoFilm = {
  promoTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoReleaseDate: '2014',
};

Store.dispatch(checkAuthorization());

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App
        promoTitle={promoFilm.promoTitle}
        promoGenre={promoFilm.promoGenre}
        promoReleaseDate={promoFilm.promoReleaseDate}
      />
    </Provider>
  </React.StrictMode>
);
