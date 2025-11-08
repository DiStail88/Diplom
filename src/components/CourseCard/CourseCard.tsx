import React, { useEffect, useState } from 'react';
import {
  Card,
  CardImage,
  CardInfo,
  CardHead,
  CardDescription,
  CardDateTime,
  CardDate,
  CardTime,
  CardComplexity,
  CardButton,
  ProgressBarContainer,
  ProgressBarFill,
} from './CourseCard.styled';

interface WorkoutProgress {
  workoutId: string;
  workoutCompleted: boolean;
  progressData: number[];
}

interface CourseCardProps {
  course: {
    _id: string;
    nameRU: string;
    nameEN: string;
    durationInDays?: number;
    dailyDurationInMinutes?: { from: number; to: number };
    difficulty?: string;
  };
  onToggleCourse?: (id: string) => void;
  isAdded?: boolean;
  showProgress?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onToggleCourse,
  isAdded = false,
  showProgress = false,
}) => {
  const [progress, setProgress] = useState<number>(0);

  const getCourseImage = (nameEN: string) => {
    switch (nameEN.toLowerCase()) {
      case 'yoga':
        return '/Home/Training/Yoga.png';
      case 'fitness':
        return '/Home/Training/Fitness.png';
      case 'stretching':
        return '/Home/Training/Stretching.png';
      case 'stepairobic':
        return '/Home/Training/StepAirpbic.png';
      case 'bodyflex':
        return '/Home/Training/Bodyflex.png';
      default:
        return '/Home/Training/Default.png';
    }
  };

  const capitalize = (str?: string) =>
    str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';

  useEffect(() => {
    if (!showProgress) return;
    const fetchProgress = async (token?: string) => {
      try {
        if (!token) {
          token = localStorage.getItem('token') || '';
        }

        const res = await fetch(
          `https://wedev-api.sky.pro/api/fitness/users/me/progress?courseId=${course._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': '',
            },
          }
        );

        const text = await res.text();

        let data;
        try {
          data = JSON.parse(text);
        } catch (err) {
          console.error('Ответ не JSON, скорее всего HTML:', err);
          return;
        }

        if (res.status === 401) {
          console.error('Пользователь не авторизован');
          setProgress(0);
          return;
        }

        if (data.workoutsProgress?.length) {
          const total = data.workoutsProgress.length;
          const completed = data.workoutsProgress.filter(
            (w: WorkoutProgress) => w.workoutCompleted
          ).length;
          setProgress(Math.round((completed / total) * 100));
        } else {
          console.log('Нет прогресса для этого курса');
          setProgress(0);
        }
      } catch (err) {
        console.error('Ошибка загрузки прогресса:', err);
      }
    };

    fetchProgress();
  }, [course._id, showProgress]);

  return (
    <Card $showProgress={showProgress}>
      <CardImage src={getCourseImage(course.nameEN)} alt={course.nameRU} />
      {onToggleCourse && (
        <CardButton onClick={() => onToggleCourse(course._id)}>
          <img
            src={
              isAdded ? '/Home/Training/Minus.svg' : '/Home/Training/Plus.svg'
            }
            alt={isAdded ? '-' : '+'}
          />
        </CardButton>
      )}
      <CardInfo>
        <CardHead>{course.nameRU}</CardHead>
        <CardDescription>
          <CardDateTime>
            <CardDate>
              <svg
                viewBox='0 0 18 18'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='18.000000'
                height='18.000000'
                fill='none'
              >
                <rect
                  id='Calendar'
                  width='18.000000'
                  height='18.000000'
                  x='0.000000'
                  y='0.000000'
                />
                <path
                  id='Icon'
                  d='M7.5 2.625C7.5 1.79657 6.82843 1.125 6 1.125C5.17157 1.125 4.5 1.79657 4.5 2.625C2.84315 2.625 1.5 3.96815 1.5 5.625L16.5 5.625C16.5 3.96815 15.1569 2.625 13.5 2.625C13.5 1.79657 12.8284 1.125 12 1.125C11.1716 1.125 10.5 1.79657 10.5 2.625L7.5 2.625ZM16.5 7.125L1.5 7.125L1.5 11.325C1.5 13.0052 1.5 13.8452 1.82698 14.487C2.1146 15.0515 2.57354 15.5104 3.13803 15.798C3.77976 16.125 4.61984 16.125 6.3 16.125L11.7 16.125C13.3802 16.125 14.2202 16.125 14.862 15.798C15.4265 15.5104 15.8854 15.0515 16.173 14.487C16.5 13.8452 16.5 13.0052 16.5 11.325L16.5 7.125ZM10.5817 10.5345C10.5 10.6949 10.5 10.905 10.5 11.325L10.5 11.925C10.5 12.345 10.5 12.5551 10.5817 12.7155C10.6537 12.8566 10.7684 12.9713 10.9095 13.0433C11.0699 13.125 11.28 13.125 11.7 13.125L12.3 13.125C12.72 13.125 12.9301 13.125 13.0905 13.0433C13.2316 12.9713 13.3463 12.8566 13.4183 12.7155C13.5 12.5551 13.5 12.345 13.5 11.925L13.5 11.325C13.5 10.905 13.5 10.6949 13.4183 10.5345C13.3463 10.3934 13.2316 10.2787 13.0905 10.2067C12.9301 10.125 12.72 10.125 12.3 10.125L11.7 10.125C11.28 10.125 11.0699 10.125 10.9095 10.2067C10.7684 10.2787 10.6537 10.3934 10.5817 10.5345Z'
                  fill='rgb(31.875,31.875,31.875)'
                  fillRule='evenodd'
                />
              </svg>
              {course.durationInDays ?? '—'} дней
            </CardDate>
            <CardTime>
              <svg
                viewBox='0 0 18 18'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='18.000000'
                height='18.000000'
                fill='none'
              >
                <rect
                  id='Time'
                  width='18.000000'
                  height='18.000000'
                  x='0.000000'
                  y='0.000000'
                />
                <path
                  id='Icon'
                  d='M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM8.25 4.5L8.25 9C8.25 9.41421 8.58579 9.75 9 9.75L12.75 9.75L12.75 8.25L9.75 8.25L9.75 4.5L8.25 4.5Z'
                  fill='rgb(31.875,31.875,31.875)'
                  fillRule='evenodd'
                />
              </svg>

              {course.dailyDurationInMinutes
                ? `${course.dailyDurationInMinutes.from}-${course.dailyDurationInMinutes.to} мин/день`
                : '—'}
            </CardTime>
          </CardDateTime>
          <CardComplexity>
            <svg
              viewBox='0 0 18 18'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='18.000000'
              height='18.000000'
              fill='none'
            >
              <rect
                id='mingcute:signal-fill'
                width='18.000000'
                height='18.000000'
                x='0.000000'
                y='0.000000'
                fill='rgb(255,255,255)'
                fillOpacity='0'
              />
              <g id='Group'>
                <path
                  id='Vector'
                  d='M18 0L18 18L0 18L0 0L18 0ZM9.4455 17.4435L9.4365 17.445L9.38325 17.4713L9.36825 17.4743L9.35775 17.4713L9.3045 17.4443C9.297 17.442 9.29025 17.4443 9.2865 17.4487L9.2835 17.4562L9.27075 17.7772L9.2745 17.7922L9.282 17.802L9.36 17.8575L9.37125 17.8605L9.38025 17.8575L9.45825 17.802L9.46725 17.79L9.47025 17.7772L9.4575 17.457C9.456 17.4495 9.45075 17.4443 9.4455 17.4435ZM9.6435 17.3587L9.633 17.3602L9.495 17.43L9.4875 17.4375L9.48525 17.4457L9.49875 17.7682L9.5025 17.7772L9.5085 17.7833L9.65925 17.8522C9.66825 17.8552 9.6765 17.8523 9.681 17.8463L9.684 17.8358L9.6585 17.3752C9.65625 17.3662 9.651 17.3602 9.6435 17.3587ZM9.10725 17.3602C9.10384 17.3587 9.10003 17.3583 9.09637 17.3591C9.09272 17.3599 9.08943 17.3619 9.087 17.3647L9.0825 17.3752L9.057 17.8358C9.057 17.8448 9.06225 17.8507 9.06975 17.8538L9.081 17.8522L9.23175 17.7825L9.23925 17.7765L9.2415 17.7682L9.255 17.4457L9.25275 17.4368L9.24525 17.4293L9.10725 17.3602Z'
                  fillRule='evenodd'
                />
                <path
                  id='Vector'
                  d='M15 2.625C15.2984 2.625 15.5845 2.74353 15.7955 2.9545C16.0065 3.16548 16.125 3.45163 16.125 3.75L16.125 14.25C16.125 14.5484 16.0065 14.8345 15.7955 15.0455C15.5845 15.2565 15.2984 15.375 15 15.375C14.7016 15.375 14.4155 15.2565 14.2045 15.0455C13.9935 14.8345 13.875 14.5484 13.875 14.25L13.875 3.75C13.875 3.45163 13.9935 3.16548 14.2045 2.9545C14.4155 2.74353 14.7016 2.625 15 2.625Z'
                  fill='rgb(217,217,217)'
                  fillRule='evenodd'
                />
                <path
                  id='Vector'
                  d='M12 4.875C12.2984 4.875 12.5845 4.99353 12.7955 5.2045C13.0065 5.41548 13.125 5.70163 13.125 6L13.125 14.25C13.125 14.5484 13.0065 14.8345 12.7955 15.0455C12.5845 15.2565 12.2984 15.375 12 15.375C11.7016 15.375 11.4155 15.2565 11.2045 15.0455C10.9935 14.8345 10.875 14.5484 10.875 14.25L10.875 6C10.875 5.70163 10.9935 5.41548 11.2045 5.2045C11.4155 4.99353 11.7016 4.875 12 4.875Z'
                  fill='rgb(217,217,217)'
                  fillRule='evenodd'
                />
                <path
                  id='Vector'
                  d='M9 7.125C9.29837 7.125 9.58452 7.24353 9.7955 7.4545C10.0065 7.66548 10.125 7.95163 10.125 8.25L10.125 14.25C10.125 14.5484 10.0065 14.8345 9.7955 15.0455C9.58452 15.2565 9.29837 15.375 9 15.375C8.70163 15.375 8.41548 15.2565 8.2045 15.0455C7.99353 14.8345 7.875 14.5484 7.875 14.25L7.875 8.25C7.875 7.95163 7.99353 7.66548 8.2045 7.4545C8.41548 7.24353 8.70163 7.125 9 7.125Z'
                  fill='rgb(0,193,255)'
                  fillRule='evenodd'
                />
                <path
                  id='Vector'
                  d='M6 9.375C6.29837 9.375 6.58452 9.49353 6.7955 9.7045C7.00647 9.91548 7.125 10.2016 7.125 10.5L7.125 14.25C7.125 14.5484 7.00647 14.8345 6.7955 15.0455C6.58452 15.2565 6.29837 15.375 6 15.375C5.70163 15.375 5.41548 15.2565 5.2045 15.0455C4.99353 14.8345 4.875 14.5484 4.875 14.25L4.875 10.5C4.875 10.2016 4.99353 9.91548 5.2045 9.7045C5.41548 9.49353 5.70163 9.375 6 9.375Z'
                  fill='rgb(0,193,255)'
                  fillRule='evenodd'
                />
                <path
                  id='Vector'
                  d='M3 11.625C3.29837 11.625 3.58452 11.7435 3.7955 11.9545C4.00647 12.1655 4.125 12.4516 4.125 12.75L4.125 14.25C4.125 14.5484 4.00647 14.8345 3.7955 15.0455C3.58452 15.2565 3.29837 15.375 3 15.375C2.70163 15.375 2.41548 15.2565 2.2045 15.0455C1.99353 14.8345 1.875 14.5484 1.875 14.25L1.875 12.75C1.875 12.4516 1.99353 12.1655 2.2045 11.9545C2.41548 11.7435 2.70163 11.625 3 11.625Z'
                  fill='rgb(0,193,255)'
                  fillRule='evenodd'
                />
              </g>
            </svg>

            {capitalize(course.difficulty)}
          </CardComplexity>
          {showProgress && (
            <ProgressBarContainer>
              <ProgressBarFill width={progress} />
              <span>{progress}%</span>
            </ProgressBarContainer>
          )}
        </CardDescription>
      </CardInfo>
    </Card>
  );
};

export default CourseCard;
