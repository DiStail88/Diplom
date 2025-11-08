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

// CourseCard.styled.ts (добавляем в конец файла)
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 16px;
  background: #f1f1f1;
  border-radius: 8px;
  margin-top: 10px;
  position: relative;

  span {
    position: absolute;
    right: 8px;
    top: -4px;
    font-size: 12px;
    color: #000;
  }
`;

export const ProgressBarFill = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: #00c1ff;
  border-radius: 8px;
  transition: width 0.3s ease;
`;
