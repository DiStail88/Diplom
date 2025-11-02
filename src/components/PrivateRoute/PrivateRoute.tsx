import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = () => {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return <div>Загрузка...</div>;

  return isAuth ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
