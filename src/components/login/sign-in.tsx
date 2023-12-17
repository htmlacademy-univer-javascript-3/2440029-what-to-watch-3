import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/api-action';
import { InitialState } from '../../store/reducer';
import { AuthStatus } from '../../types/auth';
// import SignInError from './sign-error';
import Footer from '../footer';
import { FilmDispatch } from '../../store';


export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<FilmDispatch>();
  const navigate = useNavigate();
  const { authStatus } = useSelector((state: InitialState) => state.auth);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    if (name === 'user-email') {
      setEmail(value);
    }
    if (name === 'user-password') {
      setPassword(value);
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({ email, password })).unwrap().then(() => navigate('/'));
  };

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) {
      navigate('/');
    }
  }, [authStatus, navigate]);

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='#' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>
        <h1 className='page-title user-page__title'>Sign in</h1>

      </header>
      <div className='sign-in user-page__content'>
        <form className='sign-in__form' onSubmit={handleSubmit}>
          {/* { <SignInError />} */}
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input className='sign-in__input' type='email' placeholder='Email address' name='user-email' id='user-email' value={email} onChange={handleInputChange} />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input className='sign-in__input' type='password' placeholder='Password' name='user-password' id='user-password' value={password} onChange={handleInputChange} />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}


export default SignInForm;
