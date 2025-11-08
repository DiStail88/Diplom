import styled from 'styled-components';

export const PopExitWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopExitBlock = styled.div`
  position: absolute;
  top: 120px; /* Отступ от кнопки */
  right: 0px;
  /* Frame 2043683044 */
  width: 266px;
  height: 258px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
  padding: 30px;

  border-radius: 30px;
  /* Shadow */
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const PopExitUserName = styled.p`
  width: 206px;
  height: 20px;
  color: rgba(153, 153, 153, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
`;

export const PopExitButtonBlock = styled.div`
  /* Frame 2043683042 */
  width: 206px;
  height: 114px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const PopExitButtonProfile = styled.button`
  /* Frame 2043683033 */
  width: 206px;
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

export const PopExitButtonLogout = styled.button`
  /* Frame 2043683036 */
  width: 206px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 26px 16px 26px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 1);
  background: rgba(255, 255, 255, 1);
  border-radius: 46px;

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;
