import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authApi';
import { AuthContext } from '../../context/AuthContext';
import {
  LoginBackground,
  LoginBlock,
  LoginLogo,
  LoginForm,
  LoginInputBlock,
  LoginInput,
  LoginButton,
  LoginButtonBlock,
  LoginButtonSignIn,
  ErrorMessage,
} from './Login.styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser(email, password);
      // Ждем завершения login, чтобы user был установлен
      await login(data);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ошибка входа. Проверьте данные.');
      }
    }
  };

  return (
    <LoginBackground>
      <LoginBlock $hasError={!!error}>
        <LoginLogo src='/Login/Loginlogo.png' alt='Логотип' />
        <LoginForm onSubmit={handleSubmit}>
          <LoginInputBlock>
            <LoginInput
              type='email'
              name='email'
              placeholder='Логин'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <LoginInput
              type='password'
              name='password'
              placeholder='Пароль'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </LoginInputBlock>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginButtonBlock>
            <LoginButton type='submit'>Войти</LoginButton>
            <LoginButtonSignIn
              type='button'
              onClick={() => navigate('/register')}
            >
              Зарегистрироваться
            </LoginButtonSignIn>
          </LoginButtonBlock>
        </LoginForm>
      </LoginBlock>
    </LoginBackground>
  );
}

export default Login;
