import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmDispatch } from '../store';
import { fetchFavoriteFilms, postFavoriteFilmByAction, fetchFilmById } from '../store/api-action';
import { InitialState } from '../store/reducer';

const FavoriteListButton = ({ movieId, isListed }: { movieId: string; isListed: boolean }) => {
  const dispatchAction = useDispatch<FilmDispatch>();

  useEffect(() => {
    dispatchAction(fetchFavoriteFilms());
  }, [dispatchAction]);

  const onClickFavorite = () => {
    const newStatus = isListed ? 0 : 1;
    dispatchAction(postFavoriteFilmByAction({id: movieId, action: newStatus})).unwrap().then(() => {
      dispatchAction(fetchFilmById(movieId));
    });
  };

  const listedMovies = useSelector((state: InitialState) => state.filmsData.favoriteFilms);

  return (
    <button onClick={onClickFavorite} className="btn btn--play film-card__button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isListed ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{listedMovies.length}</span>
    </button>
  );
};

export default FavoriteListButton;
