import { FilmFullInfo } from '../../types/films';

function getRatingByLevel(rating: number): string {
  switch (true) {
    case rating === 10:
      return 'Awesome';
    case rating >= 8:
      return 'Very good';
    case rating >= 5:
      return 'Good';
    case rating >= 3:
      return 'Normal';
    default:
      return 'Bad';
  }
}

function OverviewTab({ film }: { film: FilmFullInfo }) {
  return (
    <div>
      <div className='film-rating'>
        <div className='film-rating__score'>{film.rating}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>{getRatingByLevel(film.rating)}</span>
          <span className='film-rating__count'>
            {film.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className='film-card__text'>
        <p>{film.description}</p>
        <p className='film-card__director'>
          <strong>Director: {film.director}</strong>
        </p>
        <p className='film-card__starring'>
          <strong>Starring: {film.starring?.join(', ')}</strong>
        </p>
      </div>
    </div>
  );
}

export default OverviewTab;
