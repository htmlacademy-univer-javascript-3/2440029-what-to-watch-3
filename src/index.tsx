import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import { Store } from './store/';
import { checkAuthorization, fetchPromoFilm } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


Store.dispatch(checkAuthorization());
Store.dispatch(fetchPromoFilm());

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
