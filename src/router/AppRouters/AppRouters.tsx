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
import ChoiseWorkoutPage from '@/pages/ChoiseWorkoutPage/ChoiseWorkoutPage';
import WorkoutPage from '@/pages/WorkoutPage/WorkoutPage';
import UserProgressPage from '@/pages/UserProgress/UserProgressPage';

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
        <Route path='/profile' element={<ProfilePage />}>
          <Route
            path='course/:courseId/choise-workout'
            element={<ChoiseWorkoutPage />}
          />
        </Route>

        {/* Модальное окно выбора тренировки */}
        <Route
          path='/course/:courseId/choise-workout'
          element={<ChoiseWorkoutPage />}
        />

        {/* Страница тренировки */}
        <Route
          path='/course/:courseId/workout/:workoutId'
          element={<WorkoutPage />}
        />

        {/* Модалка прогресса */}
        <Route
          path='/course/:courseId/workout/:workoutId/progress'
          element={<UserProgressPage />}
        />

        <Route path='/popexit' element={<PopExitPage />} />
      </Route>

      {/* 404 */}
      <Route path='*' element={<div>Страница не найдена</div>} />
    </Routes>
  );
};

export default AppRouters;
