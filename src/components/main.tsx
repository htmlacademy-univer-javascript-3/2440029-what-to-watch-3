import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../pages/loading-screen';
import { FilmDispatch } from '../store';
import { setMoviesByGenre, showMore } from '../store/action';
import { fetchMovies } from '../store/api-action';
import { InitialState } from '../store/reducer';
import Footer from './footer';
import Genres from './genre';
import MoviesList from './movies';
import PromoFilm from './promo-film';
import { ShowMore } from './show-more';


function MainPage() {
  const dispatch = useDispatch<FilmDispatch>();
  const { genre, allFilms, displayedFilmsCount, filteredFilms, isLoading } = useSelector((state: InitialState) => state.filmsData);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (genre === 'All genres') {
      dispatch(setMoviesByGenre(allFilms));
    } else {
      dispatch(setMoviesByGenre(allFilms.filter((film) => film.genre === genre)));
    }
  }, [genre, allFilms, dispatch]);

  if (isLoading) {
    return LoadingScreen();
  }

  const handleShowMoreClick = () => {
    dispatch(showMore());
  };

  return (
    <>
      <PromoFilm />
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <Genres />

          <MoviesList films={filteredFilms.slice(0, displayedFilmsCount)} />

          <ShowMore
            onShowMoreClick={handleShowMoreClick}
            visible={displayedFilmsCount < filteredFilms.length}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
