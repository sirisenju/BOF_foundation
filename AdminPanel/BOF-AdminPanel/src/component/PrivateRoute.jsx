import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && user.role === 'admin' ? children : <Navigate to="/" />;
}

export default PrivateRoute;