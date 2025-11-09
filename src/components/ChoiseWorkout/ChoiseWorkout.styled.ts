import styled from 'styled-components';

export const ChoiseWorkoutBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ChoiseWorkoutBlock = styled.div`
  /* select workout */
  width: 460px;
  height: 609px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  padding: 40px;

  border-radius: 30px;
  /* Shadow */
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const ChoiseWorkoutHead = styled.h2`
  /* Выберите тренировку */
  width: 346px;
  height: 35px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0%;
  text-align: left;
`;

export const ChoiseWorkoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 359px;
  overflow-y: auto;
  padding-right: 10px;

  /* трек скролла */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(247, 247, 247, 1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 1);
    border-radius: 10px;
  }
`;

export const ChoiseWorkoutButton = styled.button`
  /* Frame 2043683048 */
  width: 380px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 26px 16px 26px;

  border-radius: 46px;
  background: rgba(188, 236, 48, 1);

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
`;

export const ChoiseWorkoutListBlock = styled.button`
  all: unset; /* убираем дефолтные стили кнопки */
  width: 354px;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
  border-radius: 10px;
  padding: 0 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(245, 245, 245, 1);
  }

  &:focus {
    background: rgba(240, 240, 240, 1);
  }

  &:active {
    background: rgba(230, 230, 230, 1);
  }
`;

export const ChoiseWorkoutListName = styled.p`
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ChoiseWorkoutListDesc = styled.p`
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ChoiseWorkoutListText = styled.div`
  /* Frame 2043683059 */
  width: 320px;
  height: 54px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

// export const ChoiseWorkoutListName = styled.div`
// `;

// export const ChoiseWorkoutListName = styled.div`
// `;
