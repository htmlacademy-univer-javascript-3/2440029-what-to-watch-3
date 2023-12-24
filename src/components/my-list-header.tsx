import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FilmDispatch } from '../store';
import { logout } from '../store/api-action';
import { InitialState } from '../store/reducer';
import { AuthStatus } from '../types/auth';

export function ListHeader({ totalFilms }: { totalFilms: number }) {
  const { authStatus, authedUserInfo } = useSelector((state: InitialState) => state.auth);
  const dispatchAction = useDispatch<FilmDispatch>();
  const navigateTo = useNavigate();

  const onLogoutClick = () => {
    dispatchAction(logout())
      .unwrap()
      .then(() => navigateTo('/'));
  };

  const renderUserBlock = () => authStatus === AuthStatus.AUTHENTICATED ? (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={authedUserInfo?.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={onLogoutClick}>Sign out</a>
      </li>
    </>
  ) : (
    <li className="user-block__item">
      <Link to="/login" className="user-block__key">Sign in</Link>
    </li>
  );

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">
        My list
        <span className="user-page__film-count">{totalFilms}</span>
      </h1>

      <ul className="user-block">
        {renderUserBlock()}
      </ul>
    </header>
  );
}
