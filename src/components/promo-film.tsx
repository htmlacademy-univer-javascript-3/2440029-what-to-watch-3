import React from 'react';
import { Link } from 'react-router-dom';


type promoProps = {
  title: string;
  genre: string;
  releaseDate: string;
  backgroundUrl: string;
  posterUrl: string;
  avatarUrl: string;
};


function PromoFilm({ title, genre, releaseDate, backgroundUrl: background, posterUrl: poster, avatarUrl: avatar }: promoProps) {
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={background} alt={title} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header film-card__head'>
        <div className='logo'>
          <a className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img src={avatar} alt='User avatar' width='63' height='63' />
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={poster} alt={`${title} poster`} width='218' height='327' />
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{title}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{genre}</span>
              <span className='film-card__year'>{releaseDate}</span>
            </p>

            <div className='film-card__buttons'>
              <Link to='/player/1' className='btn btn--play film-card__button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s' />
                </svg>
                <span>Play</span>
              </Link>
              <Link to='/mylist' className='btn btn--list film-card__button'>
                <svg viewBox='0 0 19 20' width='19' height='20'>
                  <use xlinkHref='#add' />
                </svg>
                <span>My list</span>
                <span className='film-card__count'>9</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
