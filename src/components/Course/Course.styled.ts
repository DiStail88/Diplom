import styled from 'styled-components';

export const CoursContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const CourseInfoBlock = styled.div`
  margin-top: 60px;
  /* Frame 2043683081 */
  width: 1160px;
  height: 885px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 60px;
`;

export const CourseImg = styled.div`
  /* skill card 17 */
  width: 1160px;
  height: 310px;
  border-radius: 30px;
`;

export const CourseNecessity = styled.div`
  /* Frame 2043683079 */
  width: 1160px;
  height: 225px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 40px 17px;
`;

export const CourseNecessityHead = styled.h2`
  /* Подойдет для вас, если: */
  width: 810px;
  height: 44px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CourseNecessityBlockItem = styled.div`
  display: flex;
  gap: 17px;
`;

export const CourseNecessityItem = styled.div``;

export const CourseFrameItem = styled.div`
  /* Frame 1597879897 */
  width: 100%;
  height: 141px;
  /* Auto layout */
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px;

  border-radius: 28px;
  background: var(
    --dark-gradient,
    linear-gradient(152.61deg, rgba(21, 23, 31, 1), rgba(30, 33, 46, 1) 100%)
  );
`;

export const NumberCircle = styled.p`
  color: rgba(188, 236, 48, 1);

  font-family: Roboto;
  font-size: 75px;
  font-weight: 500;
  line-height: 88px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CourseNecessityItemText = styled.p`
  height: 78px;
  color: rgba(255, 255, 255, 1);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CourseDirections = styled.div`
  /* Frame 2043683080 */
  width: 1160px;
  height: 230px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
`;

export const CourseDirectionsHead = styled.h2`
  /* Направления */
  width: 810px;
  height: 44px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CourseDirectionsList = styled.div`
  /* Frame 2043683031 */
  width: 1160px;
  height: 146px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 30px;

  border-radius: 28px;
  background: rgba(188, 236, 48, 1);
  flex-wrap: wrap;
`;

export const CourseDirectionsListItem = styled.li`
  color: rgba(0, 0, 0, 1);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;

  list-style: none; /* убираем стандартные точки */

  display: flex;
  align-items: center;
  gap: 8px; /* расстояние между звездочкой и текстом */

  &::before {
    content: '';
    display: inline-block;
    /* Sparcle */
    width: 26px;
    height: 26px;
    background-image: url('/Course/star.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CourseAppendBlock = styled.div`
  position: relative;
  padding-top: 102px;
  padding-bottom: 50px;
`;

export const CourseAppend = styled.div`
  position: relative;
  width: 1160px;
  height: 486px;
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  padding: 40px;
  overflow: hidden;
`;

export const CourseAppendInfo = styled.div`
  /* Frame 2043683032 */
  width: 437px;
  height: 406px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`;

export const CourseAppendHead = styled.h2`
  width: 398px;
  height: 120px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 60px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CourseAppendList = styled.div`
  width: 441px;
  height: 178px;
`;

export const CourseAppendListItem = styled.li`
  margin-bottom: 8px;
  opacity: 0.6;

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 40px;
`;

export const CourseAppendButton = styled.button`
  /* Frame 2043683033 */
  width: 437px;
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

export const CourseAppendImgBlock = styled.div``;

export const CourseAppendImg1 = styled.img`
  position: absolute;
  top: 31.6px;
  right: 378px;
`;

export const CourseAppendImg2 = styled.img`
  position: absolute;
  top: 80.6px;
  left: 445.06px;
`;

export const CourseAppendImg3 = styled.img`
  position: absolute;
  bottom: 2.3px;
  right: 2.11px;
  padding-top: 102px;
  padding-bottom: 50px;
`;
