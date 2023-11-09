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

export const ProtectedWrapper = ({ children }: ProtectedWrapperProps) => {
  const navigate = useNavigate();
  const isAuthorized = true;

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/login');
    }
  }, [isAuthorized, navigate]);

  return isAuthorized ? children : null;
};

ProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotFoundPage;
