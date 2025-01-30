import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
