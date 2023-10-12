import React from 'react';
import MainPage from './main';

type appProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseDate: string;
}


function App({ promoTitle, promoGenre, promoReleaseDate }: appProps) {
  return (
    <div className="app">
      <
        MainPage
        promoFilmTitle={promoTitle}
        promoFilmGenre={promoGenre}
        promoFilmReleaseDate={promoReleaseDate}
      />
    </div>
  );
}


export default App;
