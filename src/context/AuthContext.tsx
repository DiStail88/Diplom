import { useState, useEffect, ReactNode } from 'react';
import { AuthContext, User } from './AuthContext';
import { getUserInfo } from '../api/authApi';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        setToken(savedToken);
        try {
          const response = await getUserInfo(savedToken);
          // Извлекаем user из ответа API
          setUser(response.user);
        } catch (err) {
          console.error('Ошибка загрузки данных пользователя', err);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (data: { token: string }) => {
    try {
      setToken(data.token);
      localStorage.setItem('token', data.token);

      // Получаем данные пользователя и ждем завершения
      const response = await getUserInfo(data.token);
      // Извлекаем user из ответа API
      setUser(response.user);
    } catch (err) {
      console.error('Ошибка получения данных пользователя после логина', err);
      logout();
      throw err; // Пробрасываем ошибку дальше
    }
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: !!token,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
