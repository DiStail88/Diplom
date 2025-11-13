import styled from 'styled-components';

export const WorkoutContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const WorkoutBlock = styled.div`
  /* Frame 2043683086 */
  width: 1160px;
  height: 1154px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
`;

export const WorkoutHead = styled.h1`
  width: 810px;
  height: 60px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 60px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0px;
  text-align: left;
`;

export const WorkoutVideo = styled.div`
  width: 1160px;
  position: relative;
  padding-top: 56.25%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const WorkoutBlockProgress = styled.div`
  /* prof card 2 */
  width: 1160px;
  height: 375px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  padding: 40px;

  border-radius: 30px;
  /* Shadow */
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  margin-bottom: 260px;
`;

export const WorkoutProgressHead = styled.h2`
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0%;
  text-align: left;
`;

export const WorkoutProgress = styled.div``;

export const WorkoutProgressButton = styled.button`
  /* Frame 2043683033 */
  width: 320px;
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
  transition: transform 0.6s ease;
  &:hover {
    background: rgba(195, 234, 166, 1);
    transform: scale(1.05);
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

export const ProgressNameWorkout = styled.p`
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const WorkoutBlockProgressExercises = styled.div`
  width: 1080px;
  max-height: 148px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
`;

// export const WorkoutProgressButton = styled.div`

// `;

// export const WorkoutProgressButton = styled.div`

// `;
