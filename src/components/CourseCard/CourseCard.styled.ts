import styled from 'styled-components';

export const Card = styled.div<{ $showProgress?: boolean }>`
  position: relative;
  width: 360px;
  height: ${({ $showProgress }) => ($showProgress ? '649px' : '501px')};
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

export const CardImage = styled.img`
  width: 100%;
  border-radius: 30px 30px 0 0;
  object-fit: cover;
`;

export const CardInfo = styled.div`
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

export const CardHead = styled.h2`
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

export const CardDescription = styled.div`
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

export const CardDateTime = styled.div`
  display: flex;
  gap: 6px;
`;

export const CardDate = styled.div`
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

export const CardTime = styled.div`
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

export const CardComplexity = styled.div`
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

export const CardButton = styled.button`
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

export const ProgressBarContainer = styled.div`
  padding-top: 6px;
  width: 300px;
  background: rgba(247, 247, 247, 1);
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  margin: 12px 0 0 0;
`;

export const ProgressBarFill = styled.div<{ width: number }>`
  width: ${({ width }) => Math.min(Math.max(width, 0), 100)}%;
  height: 100%;
  background: rgba(0, 193, 255, 1);
  border-radius: 50px;
  transition: width 0.6s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProgressButton = styled.button`
  margin-top: 40px;
  /* Frame 2043683033 */
  width: 300px;
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

export const ProgressHead = styled.p`
  padding-top: 10px;
  padding-bottom: 10px;
  /* Прогресс 40% */
  width: 118px;
  height: 20px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;
