import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderBackground,
  HeaderLogo,
  HeaderParag,
  HeaderButton,
  HeaderAuthBlock,
  HeaderUserName,
  HeaderUserButton,
  HeaderUserLogo,
} from './Header.styled';
import { AuthContext } from '../../context/AuthContext';
import PopExit from '../PopExit/PopExit';

const Header = () => {
  const { isAuth, user, loading } = useContext(AuthContext);
  const [showPopExit, setShowPopExit] = useState(false);
  const location = useLocation(); // ✅ получаем текущий путь

  if (loading) return <div>Загрузка...</div>;

  // Проверяем, находимся ли мы на странице профиля
  const isProfilePage = location.pathname === '/profile';

  return (
    <>
      <HeaderBackground>
        <HeaderLogo>
          <Link to='/'>
            <img src='/Home/headerlogo.png' alt='logo' />
          </Link>

          {/* 🔹 Отображаем надпись только если не страница профиля */}
          {!isProfilePage && (
            <HeaderParag>Онлайн-тренировки для занятий дома</HeaderParag>
          )}
        </HeaderLogo>

        {!isAuth ? (
          <Link to='/login'>
            <HeaderButton>Войти</HeaderButton>
          </Link>
        ) : (
          <HeaderAuthBlock>
            <HeaderUserLogo>
              <svg viewBox='0 0 50 50' width='50' height='50'>
                <rect width='50' height='50' fill='none' />
                <path
                  d='M45.8333 24.9998C45.8333 36.5058 36.5059 45.8332 25 45.8332C13.494 45.8332 4.16663 36.5058 4.16663 24.9998C4.16663 13.4939 13.494 4.1665 25 4.1665C36.5059 4.1665 45.8333 13.4939 45.8333 24.9998ZM37.5 32.4403C37.5 35.8921 31.9035 39.5832 25 39.5832C18.0964 39.5832 12.5 35.8921 12.5 32.4403C12.5 28.9885 18.0964 27.0832 25 27.0832C31.9035 27.0832 37.5 28.9885 37.5 32.4403ZM25 22.9165C28.4517 22.9165 31.25 20.1183 31.25 16.6665C31.25 13.2147 28.4517 10.4165 25 10.4165C21.5482 10.4165 18.75 13.2147 18.75 16.6665C18.75 20.1183 21.5482 22.9165 25 22.9165Z'
                  fill='rgb(217,217,217)'
                  fillRule='evenodd'
                />
              </svg>
            </HeaderUserLogo>

            <HeaderUserName>{user?.email}</HeaderUserName>

            <HeaderUserButton onClick={() => setShowPopExit(prev => !prev)}>
              <svg
                viewBox='0 0 12.7695 12.7695'
                width='12.769531'
                height='12.769531'
                fill='none'
              >
                <path
                  d='M9.02936 0L9.02936 9.02936L0 9.02936L0 7.02936L8.02936 7.02936L8.02936 8.02936L7.02936 8.02936L7.02936 0L9.02936 0Z'
                  fill='rgb(0,0,0)'
                  fillRule='nonzero'
                  transform='matrix(0.707107,0.707107,-0.707107,0.707107,6.38477,0)'
                />
              </svg>
            </HeaderUserButton>
          </HeaderAuthBlock>
        )}

        {/* Модальное окно PopExit */}
        {showPopExit && <PopExit onClose={() => setShowPopExit(false)} />}
      </HeaderBackground>
    </>
  );
};

export default Header;
