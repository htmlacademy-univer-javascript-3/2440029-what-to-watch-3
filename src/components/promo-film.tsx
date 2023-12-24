import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { InitialState } from '../store/reducer';
import { AuthStatus } from '../types/auth';
import FavoriteListButton from './add-to-mylist';
import { Header } from './header';

function usePromoFilmData() {
  const promoFilm = useSelector((state: InitialState) => state.filmsData.promoFilm);
  const favoriteFilms = useSelector((state: InitialState) => state.filmsData.favoriteFilms);
  const isAuthorized = useSelector((state: InitialState) => state.auth.authStatus === AuthStatus.AUTHENTICATED);

  return { promoFilm, favoriteFilms, isAuthorized };
}

function PromoFilm() {
  const { promoFilm, favoriteFilms, isAuthorized } = usePromoFilmData();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (promoFilm) {
      setIsFavorite(favoriteFilms.some((film) => film.id === promoFilm.id));
    }
  }, [favoriteFilms, promoFilm]);

  if (!promoFilm) {
    return null;
  }

  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>
      <Header />

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width='218' height='327' />
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{promoFilm.name}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{promoFilm.genre}</span>
              <span className='film-card__year'>{promoFilm.released}</span>
            </p>

            <div className='film-card__buttons'>
              <Link to={`/player/${promoFilm.id}`} className='btn btn--play film-card__button'>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s' />
                </svg>
                <span>Play</span>
              </Link>
              {isAuthorized && <FavoriteListButton movieId={promoFilm.id} isListed={isFavorite} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;

