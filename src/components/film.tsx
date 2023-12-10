/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import Footer from './footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { LoadingScreen } from '../pages/loading-screen';
import { FilmDispatch } from '../store';
import { InitialState } from '../store/state';
import { FilmShortInfo } from '../types/films';
import { fetchFilmById, fetchSimilarFilms } from '../store/api-action';
import NotFoundPage from './not-found-page';
import Tabs from './tabs/tabs';
import MoviesList from './movies';
import { Header } from './header';
import { AuthStatus } from '../types/auth';

function Film() {
  const { id } = useParams<{id: string}>();
  const dispatch = useDispatch<FilmDispatch>();
  const film = useSelector((state: InitialState) => state.films.currentFilm);
  const isLoading = useSelector((state: InitialState) => state.films.isLoading);
  const errorMsg = useSelector((state: InitialState) => state.films.errorMsg);
  const authStatus = useSelector((state: InitialState) => state.films.authStatus);
  const [similarFilms, setSimilarFilms] = useState<FilmShortInfo[]>([]);

  useEffect(() => {
    dispatch(fetchFilmById(id as string));
    dispatch(fetchSimilarFilms(id as string))
      .unwrap()
      .then((data) => {
        setSimilarFilms(data);
      })
      .catch((err) => localStorage.setItem('error', err));

  }, [dispatch, id]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (errorMsg) {
    return <div>Something went wrong {errorMsg}</div>;
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

                <Link
                  to={'/mylist'}
                  className='btn btn--list film-card__button'
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>3</span>
                </Link>

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
