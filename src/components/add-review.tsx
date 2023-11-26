import {useParams} from 'react-router-dom';
import { films } from '../mocks/films';
import ReviewForm from './review';


function AddReview() {
  const {id} = useParams<{id: string}>();
  const film = films.find((_film) => _film.id === id) || films[0];

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.previewSrc} alt={film.title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <a href='#' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='#' className='breadcrumbs__link'>{film.title}</a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src='/img/avatar.jpg' alt='User avatar' width='63' height='63' />
              </div>
            </li>
            <li className='user-block__item'>
              <a className='user-block__link'>Sign out</a>
            </li>
          </ul>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film.previewSrc} alt={film.title} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <ReviewForm />
      </div>

    </section>);
}

export default AddReview;