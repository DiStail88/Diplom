import styled from 'styled-components';

export const MainHeader = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: rgba(0, 0, 0, 1);

    font-family: Roboto;
    font-size: 60px;
    font-weight: 500;
    line-height: 70px;
    letter-spacing: 0px;
    text-align: left;
  }

  img {
    width: 288px;
    height: 120.17px;
  }
`;

export const MainTrainingBlock = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const TrainingBlock = styled.div`
  position: relative;
  width: 360px;
  height: 501px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 0px 0px 15px 0px;
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const TrainingInfo = styled.div`
  /* Frame 2043683021 */
  width: 300px;
  height: 137px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const TrainingHead = styled.h2`
  width: 300px;
  height: 35px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
`;

export const TrainingDescription = styled.div`
  /* Frame 2043683024 */
  width: 300px;
  height: 82px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

export const TrainingDate = styled.button`
  /* Frame 2043683020 */
  width: 103px;
  height: 38px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 10px;

  border-radius: 50px;
  background: rgba(247, 247, 247, 1);
  border: none;
`;

export const TrainingTime = styled.button`
  /* Frame 2043683021 */
  width: 163px;
  height: 38px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 10px;

  border-radius: 50px;
  background: rgba(247, 247, 247, 1);
  border: none;
`;

export const TrainingComplexity = styled.button`
  /* Frame 2043683020 */
  width: 129px;
  height: 38px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  padding: 10px;

  border-radius: 50px;
  background: rgba(247, 247, 247, 1);
  border: none;
`;

export const TrainingDateTime = styled.div`
  display: flex;
  gap: 6px;
`;

export const TrainingButton = styled.button`
  all: unset;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    transform: none;
  }
`;

export const MainButtonUp = styled.div`
  padding-top: 34px;
  display: flex;
  justify-content: center;
  padding-bottom: 82px;
`;

export const ButtonUp = styled.button`
  width: 127px;
  height: 52px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 26px 16px 26px;

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;

  border-radius: 46px;
  background: rgba(188, 236, 48, 1);
  border: none;

  transition: transform 0.6s ease;
  &:hover {
    background: rgba(195, 234, 166, 1);
    transform: scale(1.05);
  }
`;
