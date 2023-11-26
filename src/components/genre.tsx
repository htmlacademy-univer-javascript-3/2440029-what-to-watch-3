import { useSelector, useDispatch } from 'react-redux';
import { setGenre } from '../store/action';
import { InitialState } from '../store/state';

export function Genres() {
  const dispatch = useDispatch();
  const films = useSelector((state: InitialState) => state.films);
  const uniqueGenres = ['All genres', ...new Set(films.films.map((film) => film.genre))];

  const GenreItem = ({ genre }: { genre: string | undefined }) => {
    if (!genre) {
      return null;
    }
    return (
      <li key={genre} className='catalog__genres-item'>
        <div className='catalog__genres-link' onClick={() => dispatch(setGenre(genre))}>
          {genre}
        </div>
      </li>
    );
  };

  return (
    <ul className='catalog__genres-list'>
      {uniqueGenres.map((genre) => <GenreItem key={genre} genre={genre} />)}
    </ul>
  );
}

export default Genres;
