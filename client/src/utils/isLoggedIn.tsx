// when called within a component, it will return true if the user is logged in
export function isLoggedIn(): boolean {
  // Check if the user is logged in by checking the local storage for a token
  // const token = localStorage.getItem("token");
  // return !!token; // Returns true if token exists, false otherwise

  // force state for testing purposes
  return false;
}

/*
// PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


interface PrivateRouteProps {
  isAuthenticated: boolean; // Replace with your actual authentication check
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

*/
