import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PopExitPage from '../../pages/PopExitPage/PopExitPage';
import { AuthContext } from '../../context/AuthContext';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const AppRouters = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <div>Загрузка...</div>;

  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path='/' element={<HomePage />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignInPage />} />
      </Route>

      {/* Приватные маршруты */}
      <Route element={<PrivateRoute />}>
        <Route path='/popexit' element={<PopExitPage />} />
        {/* Другие приватные страницы */}
      </Route>

      {/* 404 */}
      <Route path='*' element={<div>Страница не найдена</div>} />
    </Routes>
  );
};

export default AppRouters;
