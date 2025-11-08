import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import PopExitPage from '../../pages/PopExitPage/PopExitPage';

import { AuthContext } from '../../context/AuthContext';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import ProfilePage from '@/pages/Profile/Profile';
import CoursePage from '@/pages/CoursePage/CoursePage';

const AppRouters = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <div>Загрузка...</div>;

  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path='/' element={<HomePage />}>
        {/* 🔹 Модальные окна поверх главной */}
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<SignInPage />} />
      </Route>

      <Route path='/course/:id' element={<CoursePage />} />

      {/* Приватные маршруты */}
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/popexit' element={<PopExitPage />} />
      </Route>

      {/* 404 */}
      <Route path='*' element={<div>Страница не найдена</div>} />
    </Routes>
  );
};

export default AppRouters;
