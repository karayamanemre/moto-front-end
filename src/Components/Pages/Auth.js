import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthRoute;
};

export default withAuth;