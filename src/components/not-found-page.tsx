import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>Эта страница не найдена.</p>
    <a href='/'>Вернуться на главную</a>
  </div>
);

NotFoundPage.propTypes = {};

type ProtectedWrapperProps = {
  children: React.ReactNode;
};

export const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const navigate = useNavigate();

  const tokenFromStorage = localStorage.getItem('user_token');
  const isAuthorized = tokenFromStorage !== null;

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/login');
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) {
    return null;
  }

  return children as React.ReactElement | null;
};

ProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotFoundPage;
