import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/authApi';
import {
  SignInBackground,
  SignInBlock,
  SignInLogo,
  SignInForm,
  SignInInputBlock,
  SignInInput,
  SignInButton,
  SignInButtonBlock,
  SignInButtonSignIn,
  ErrorMessage,
} from './SignIn.styled';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      await registerUser(email, password);
      navigate('/login');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ошибка регистрации');
      }
    }
  };

  return (
    <SignInBackground>
      <SignInBlock $hasError={!!error}>
        <SignInLogo src='/Login/Loginlogo.png' alt='Логотип' />

        <SignInForm onSubmit={handleSubmit}>
          <SignInInputBlock>
            <SignInInput
              type='email'
              placeholder='Логин'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <SignInInput
              type='password'
              placeholder='Пароль'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <SignInInput
              type='password'
              placeholder='Повторите пароль'
              required
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
            />
          </SignInInputBlock>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SignInButtonBlock>
            <SignInButton type='submit'>Зарегистрироваться</SignInButton>
            <SignInButtonSignIn
              type='button'
              onClick={() => navigate('/login')}
            >
              Войти
            </SignInButtonSignIn>
          </SignInButtonBlock>
        </SignInForm>
      </SignInBlock>
    </SignInBackground>
  );
}

export default SignIn;
