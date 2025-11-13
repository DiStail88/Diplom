// src/components/Header/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import Header from './Header';

describe('Header Component', () => {
  test('рендерится логотип и кнопка входа для неавторизованного пользователя', () => {
    const mockValue = {
      user: null,
      isAuth: false,
      token: '',
      loading: false,
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={mockValue}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByAltText('logo')).toBeTruthy();
    expect(screen.getByText('Войти')).toBeTruthy();
  });

  test('показывает email авторизованного пользователя и скрывает кнопку входа', () => {
    const mockValue = {
      user: { email: 'test@example.com' },
      isAuth: true,
      token: 'token123',
      loading: false,
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={mockValue}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('test@example.com')).toBeTruthy();
    expect(screen.queryByText('Войти')).toBeNull(); // Кнопка должна быть скрыта
  });

  test('показывает загрузку', () => {
    const mockValue = {
      user: null,
      isAuth: false,
      token: '',
      loading: true,
      login: jest.fn(),
      logout: jest.fn(),
    };

    render(
      <AuthContext.Provider value={mockValue}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Загрузка...')).toBeTruthy();
  });
});
