import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FilmDispatch } from '../store';
import { logout } from '../store/api-action';
import { InitialState } from '../store/reducer';
import { AuthStatus } from '../types/auth';

export function Header({children}: {children?: React.ReactNode}) {
  const dispatch = useDispatch<FilmDispatch>();
  const { authStatus, authedUserInfo } = useSelector((state: InitialState) => state.auth);
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    dispatch(logout()).unwrap().then(() => navigate('/'));
  };

  const renderUserBlock = () => {
    if (authStatus === AuthStatus.AUTHENTICATED) {
      return (
        <>
          <li className='user-block__item'>
            <Link to="/mylist">
              <div className='user-block__avatar'>
                <img
                  src={authedUserInfo?.avatarUrl}
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </Link>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link' onClick={handleSignOutClick}>Sign out</a>
          </li>
        </>
      );
    } else {
      return (
        <li className='user-block__item'>
          <Link to='/login' className='user-block__link'>Sign in</Link>
        </li>
      );
    }
  };

  return (
    <header className='page-header film-card__head'>
      <div className='logo'>
        <a href='#' className='logo__link'>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </a>
      </div>
      {children}
      <ul className='user-block'>
        {renderUserBlock()}
      </ul>
    </header>
  );
}
