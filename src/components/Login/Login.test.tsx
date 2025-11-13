// src/components/Login/Login.test.tsx
// Моки должны быть в самом начале файла, до импортов
const mockNavigate = jest.fn();
const mockLoginUser = jest.fn();

// Мокаем модули ДО импортов
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('@/api/authApi', () => ({
  loginUser: mockLoginUser,
}));

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import Login from './Login';

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLoginUser.mockClear();
    mockNavigate.mockClear();
  });

  test('отображает форму входа', () => {
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
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByPlaceholderText('Логин')).toBeTruthy();
    expect(screen.getByPlaceholderText('Пароль')).toBeTruthy();
    expect(screen.getByText('Войти')).toBeTruthy(); // Исправлено с toBeNull на toBeTruthy
    expect(screen.getByText('Зарегистрироваться')).toBeTruthy();
  });

  test('переходит на страницу регистрации', () => {
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
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    fireEvent.click(screen.getByText('Зарегистрироваться'));
    expect(mockNavigate).toHaveBeenCalledWith('/register');
  });

  test('показывает ошибку при неудачном входе', async () => {
    const mockValue = {
      user: null,
      isAuth: false,
      token: '',
      loading: false,
      login: jest.fn(),
      logout: jest.fn(),
    };

    mockLoginUser.mockRejectedValue(new Error('Неверные учетные данные'));

    render(
      <AuthContext.Provider value={mockValue}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Логин'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Пароль'), {
      target: { value: 'password' },
    });
    fireEvent.click(screen.getByText('Войти'));

    expect(await screen.findByText('Неверные учетные данные')).toBeTruthy();
  });
});
