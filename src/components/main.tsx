import MoviesList from './movies';
import PromoFilm from './promo-film';
import Genres from './genre';
import Footer from './footer';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../store/state';
import { useEffect } from 'react';
import { getMoviesByGenre } from '../store/action';

type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
}


function MainPage({ promoFilmTitle, promoFilmGenre, promoFilmReleaseDate }: MainPageProps) {
  const dispatch = useDispatch();
  const { genre, films } = useSelector((state: InitialState) => state.films);

  useEffect(() => {
    dispatch(getMoviesByGenre(genre));
  }, [genre, dispatch]);


  return (
    <>
      <PromoFilm
        title={promoFilmTitle}
        genre={promoFilmGenre}
        releaseDate={promoFilmReleaseDate}
        backgroundUrl='img/bg-the-grand-budapest-hotel.jpg'
        posterUrl='img/the-grand-budapest-hotel-poster.jpg'
        avatarUrl='img/avatar.jpg'
      />


      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <Genres />

          <MoviesList films={films} />

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
