import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>Эта страница не найдена.</p>
    <a href='/'>Вернуться на главную</a>
  </div>
);

type ProtectedWrapperProps = {
  children: React.ReactNode;
};

function withProtectedNavigation<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const navigate = useNavigate();
    const tokenFromStorage = localStorage.getItem('user_token');

    useEffect(() => {
      if (!tokenFromStorage) {
        navigate('/login');
      }
    }, [tokenFromStorage, navigate]);

    if (!tokenFromStorage) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

// eslint-disable-next-line
export const ProtectedWrapper: React.FC<ProtectedWrapperProps> = withProtectedNavigation(({ children }) => <>{children}</>);

export default NotFoundPage;
