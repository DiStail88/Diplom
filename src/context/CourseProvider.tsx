import React, { useContext, useEffect, useState, useCallback } from 'react';
import { getAllCourses, Course } from '@/api/coursesApi';
import { AuthContext } from './AuthContext';
import { CourseContext } from './CourseContext';

const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, token } = useContext(AuthContext);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setAllCourses(data);
      } catch (err) {
        console.error('Ошибка загрузки курсов:', err);
      }
    };
    fetchCourses();
  }, []);


  const refreshUserCourses = useCallback(async () => {
    if (!isAuth || !token) {
      setUserCourses([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        'https://wedev-api.sky.pro/api/fitness/users/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка получения курсов пользователя: ${response.status}`
        );
      }

      const data = await response.json();

      const selectedIds: string[] = data?.user?.selectedCourses || [];

      const selected = allCourses.filter(course =>
        selectedIds.includes(course._id)
      );
      setUserCourses(selected);
    } catch (err) {
      console.error('Ошибка загрузки курсов пользователя:', err);
    } finally {
      setLoading(false);
    }
  }, [isAuth, token, allCourses]);

  // Добавить курс
  const addCourse = async (courseId: string) => {
    if (!token) {
      console.error('Токен отсутствует');
      return;
    }

    try {

      const response = await fetch(
        'https://wedev-api.sky.pro/api/fitness/users/me/courses',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ courseId }),
        }
      );


      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: 'Неизвестная ошибка' }));
        console.error('Данные ошибки:', errorData);
        throw new Error(
          `Ошибка добавления курса: ${response.status} - ${errorData.message}`
        );
      }

      const result = await response.json();

      await refreshUserCourses();
      return result;
    } catch (err) {
      console.error('Ошибка при добавлении курса:', err);
      throw err;
    }
  };

  // Удалить курс
  const removeCourse = async (courseId: string) => {
    if (!token) {
      console.error('Токен отсутствует');
      return;
    }

    try {

      const response = await fetch(
        `https://wedev-api.sky.pro/api/fitness/users/me/courses/${courseId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: 'Неизвестная ошибка' }));
        throw new Error(
          `Ошибка удаления курса: ${response.status} - ${errorData.message}`
        );
      }

      const result = await response.json();

      await refreshUserCourses();
      return result;
    } catch (err) {
      console.error('Ошибка при удалении курса:', err);
      throw err;
    }
  };

  // Обновляем курсы пользователя при изменении токена или всех курсов
  useEffect(() => {
    refreshUserCourses();
  }, [refreshUserCourses]);

  return (
    <CourseContext.Provider
      value={{
        allCourses,
        userCourses,
        addCourse,
        removeCourse,
        refreshUserCourses,
        loading,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
