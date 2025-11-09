import styled from 'styled-components';

export const UserProgressBackground = styled.div`
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

export const UserProgressBlock = styled.div`
  /* progress */
  width: 426px;
  height: 595.5px;
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

export const UserProgressHead = styled.h2`
  /* Мой прогресс */
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

export const UserProgressQuestions = styled.div`
  width: 320px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const UserProgressInput = styled.input`
  /* Frame 2043683045 */
  width: 320px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 16px 18px 16px 18px;

  box-sizing: border-box;
  border: 1px solid rgba(208, 206, 206, 1);
  border-radius: 8px;

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const UserProgressButton = styled.button`
  /* Frame 2043683048 */
  width: 346px;
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

export const UserProgressDoneBlock = styled.div`
  /* progress */
  width: 426px;
  height: 270px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
  padding: 40px;

  border-radius: 30px;
  /* Shadow */
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const UserProgressDoneHead = styled.h2`
  width: 346px;
  height: 88px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: center;
`;

export const UserProgressDoneImg = styled.img``;

export const UserProgressBlockQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 346.5px;
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

export const UserProgressQuestionsName = styled.p`
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const UserProgressNameandInput = styled.div`
  /* Frame 2043683047 */
  width: 320px;
  height: 102px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

// export const UserProgressQuestionsName = styled.div`

// `;

// export const UserProgressQuestionsName = styled.div`

// `;
