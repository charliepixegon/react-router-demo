import React from 'react';
import { useAuth } from '../contexts/Auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
