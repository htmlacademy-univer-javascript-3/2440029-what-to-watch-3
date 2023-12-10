import { Link } from 'react-router-dom';
import { Header } from './header';


type promoProps = {
  title: string;
  genre: string;
  releaseDate: string;
  backgroundUrl: string;
  posterUrl: string;
};


function PromoFilm({ title, genre, releaseDate, backgroundUrl: background, posterUrl: poster, }: promoProps) {
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={background} alt={title} />
      </div>

      <h1 className='visually-hidden'>WTW</h1>
      <Header />

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
