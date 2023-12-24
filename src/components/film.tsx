import React from 'react';
import Footer from './footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { LoadingScreen } from '../pages/loading-screen';
import { FilmDispatch } from '../store';
import { InitialState } from '../store/reducer';
import { FilmShortInfo } from '../types/films';
import { fetchFilmById, fetchSimilarFilms } from '../store/api-action';
import NotFoundPage from './not-found-page';
import Tabs from './tabs/tabs';
import MoviesList from './movies';
import { Header } from './header';
import { AuthStatus } from '../types/auth';
import FavoriteListButton from './add-to-mylist';

const useFilmData = (filmId: string) => {
  const dispatch = useDispatch<FilmDispatch>();
  const film = useSelector((state: InitialState) => state.filmsData.currentFilm);
  const isLoading = useSelector((state: InitialState) => state.filmsData.isLoading);
  const errorMsg = useSelector((state: InitialState) => state.filmsData.errorMsg);
  const [similarFilms, setSimilarFilms] = useState<FilmShortInfo[]>([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      await dispatch(fetchFilmById(filmId));
      try {
        const data = await dispatch(fetchSimilarFilms(filmId)).unwrap();
        setSimilarFilms(data);
      } catch (err) {
        const errorMessage = typeof err === 'string' ? err : 'Unknown error occurred';
        localStorage.setItem('error', errorMessage);
      }
    };

    fetchFilmData();
  }, [dispatch, filmId]);

  return { film, similarFilms, isLoading, errorMsg };
};

function Film() {
  const { id } = useParams<{ id: string }>();
  const { film, similarFilms, isLoading, errorMsg } = useFilmData(id as string);
  const authStatus = useSelector((state: InitialState) => state.auth.authStatus);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (errorMsg) {
    return <div>Something went wrong: {errorMsg}</div>;
  }

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <React.Fragment>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <Header />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.released}</span>
              </p>

              <div className='film-card__buttons'>
                <Link
                  to={`/player/${film.id}`}
                  className='btn btn--play film-card__button'
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {authStatus === AuthStatus.AUTHENTICATED && <FavoriteListButton movieId={film.id} isListed={film.isFavorite!} />}
                <Link
                  to={`/films/${film.id}/review`}
                  className='btn film-card__button'
                  style={{ display: authStatus === AuthStatus.AUTHENTICATED ? 'block' : 'none' }}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img
                src={film.posterImage}
                alt={film.name}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          <MoviesList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;
