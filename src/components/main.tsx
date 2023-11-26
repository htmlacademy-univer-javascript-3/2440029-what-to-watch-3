import MoviesList from './movies';
import PromoFilm from './promo-film';
import Genres from './genre';
import Footer from './footer';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../store/state';
import { useEffect } from 'react';
import { getMoviesByGenre, showMore } from '../store/action';
import { ShowMore } from './show-more';

type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
}


function MainPage({ promoFilmTitle, promoFilmGenre, promoFilmReleaseDate }: MainPageProps) {
  const dispatch = useDispatch();
  const { genre, films, displayedFilmsCount } = useSelector((state: InitialState) => state.films);

  useEffect(() => {
    dispatch(getMoviesByGenre(genre));
  }, [genre, dispatch]);

  const handleShowMoreClick = () => {
    dispatch(showMore());
  };

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

          <MoviesList films={films.slice(0, displayedFilmsCount)} />

          <ShowMore
            onShowMoreClick={handleShowMoreClick}
            visible={displayedFilmsCount < films.length}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
