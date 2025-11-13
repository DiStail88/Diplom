import { createContext } from 'react';

export interface User {
  email: string;
  selectedCourses?: string[];
}

export interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  token: string;
  loading: boolean;
  login: (data: { token: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: false,
  token: '',
  loading: true,
  login: () => {},
  logout: () => {},
});
