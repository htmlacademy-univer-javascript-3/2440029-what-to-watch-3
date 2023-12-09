import React from 'react';
import Footer from './footer';
import { MovieCardProps } from './movie-card';
import { Link, useParams } from 'react-router-dom';
// import Tabs from './tabs/tabs';
// import MoviesList from './movies';


function Film({ films: films }: { films: MovieCardProps[] }) {
  const { id } = useParams<{ id: string }>();
  const film = films.find((_film) => _film.id === id);
  if (!film) {
    return <div>film not found</div>;
  }
  // const similarFilms = films.filter((_film) => _film.id !== film.id && _film.genre === film.genre);

  return (
    <React.Fragment>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.previewSrc} alt={film.title} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>
            <div className='logo'>
              <a href='#' className='logo__link'>
                <span className='logo__letter logo__letter--1'>W</span>
                <span className='logo__letter logo__letter--2'>T</span>
                <span className='logo__letter logo__letter--3'>W</span>
              </a>
            </div>

            <ul className='user-block'>
              <li className='user-block__item'>
                <div className='user-block__avatar'>
                  <img
                    src='/img/avatar.jpg'
                    alt='User avatar'
                    width='63'
                    height='63'
                  />
                </div>
              </li>
              <li className='user-block__item'>
                <a className='user-block__link'>Sign out</a>
              </li>
            </ul>
          </header>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.releaseDate}</span>
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
                src={film.previewSrc}
                alt={film.title}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              {/* <Tabs film={film} /> */}
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          {/* <MoviesList films={similarFilms} /> */}
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;
