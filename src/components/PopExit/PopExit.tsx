import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PopExitWrapper,
  PopExitBlock,
  PopExitUserName,
  PopExitButtonBlock,
  PopExitButtonProfile,
  PopExitButtonLogout,
} from './PopExit.styled';
import { AuthContext } from '../../context/AuthContext';

interface PopExitProps {
  onClose: () => void;
}

const PopExit = ({ onClose }: PopExitProps) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToProfile = () => {
    onClose();
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <PopExitWrapper onClick={handleWrapperClick}>
      <PopExitBlock>
        <PopExitUserName>{user?.email}</PopExitUserName>
        <PopExitButtonBlock>
          <PopExitButtonProfile onClick={goToProfile}>
            Мой профиль
          </PopExitButtonProfile>
          <PopExitButtonLogout onClick={handleLogout}>
            Выйти
          </PopExitButtonLogout>
        </PopExitButtonBlock>
      </PopExitBlock>
    </PopExitWrapper>
  );
};

export default PopExit;
