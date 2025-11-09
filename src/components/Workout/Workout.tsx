import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import {
  WorkoutContainer,
  WorkoutHead,
  WorkoutBlock,
  WorkoutVideo,
  WorkoutBlockProgress,
  WorkoutProgressHead,
  WorkoutProgressButton,
  StyledIframe,
  ProgressBarContainer,
  ProgressBarFill,
  ProgressNameWorkout,
  WorkoutBlockProgressExercises,
} from './Workout.styled';

interface Exercise {
  name: string;
  quantity: number;
}

interface WorkoutData {
  _id: string;
  name: string;
  video: string;
  exercises?: Exercise[];
}

interface WorkoutProgressData {
  workoutId: string;
  workoutCompleted: boolean;
  progressData: number[];
}

interface CourseData {
  _id: string;
  nameRU: string;
  workouts: WorkoutData[];
}

const Workout = () => {
  const { courseId, workoutId } = useParams();
  const navigate = useNavigate();

  const [workout, setWorkout] = useState<WorkoutData | null>(null);
  const [courseName, setCourseName] = useState<string>('');
  const [currentWorkoutProgress, setCurrentWorkoutProgress] =
    useState<WorkoutProgressData | null>(null);

  // Получаем данные курса
  useEffect(() => {
    if (!courseId) return;
    const token = localStorage.getItem('token');

    fetch(`https://wedev-api.sky.pro/api/fitness/courses/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then((data: CourseData) => {
        setCourseName(data.nameRU);
      })
      .catch(console.error);
  }, [courseId]);

  // Получаем данные текущей тренировки
  useEffect(() => {
    if (!workoutId) return;
    const token = localStorage.getItem('token');

    fetch(`https://wedev-api.sky.pro/api/fitness/workouts/${workoutId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setWorkout(data))
      .catch(console.error);
  }, [workoutId]);

  // Получаем прогресс пользователя по текущей тренировке
  useEffect(() => {
    if (!courseId || !workoutId) return;
    const token = localStorage.getItem('token');

    fetch(
      `https://wedev-api.sky.pro/api/fitness/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
      .then(res => res.json())
      .then(data => setCurrentWorkoutProgress(data))
      .catch(console.error);
  }, [courseId, workoutId]);

  // Функция для удаления части с повторениями из названия упражнения
  const getExerciseNameWithoutRepetitions = (exerciseName: string) => {
    // Убираем часть в скобках с повторениями
    return exerciseName.replace(/\s*\(\d+\s+повторений\)\s*$/, '');
  };

  const renderExerciseProgress = () => {
    if (!workout || !workout.exercises) return null;

    return workout.exercises.map((exercise, index) => {
      const completedCount = currentWorkoutProgress?.progressData?.[index] || 0;
      const progressPercent =
        exercise.quantity > 0
          ? Math.min((completedCount / exercise.quantity) * 100, 100)
          : 0;

      return (
        <div key={index} style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}
          >
            <ProgressNameWorkout>
              {getExerciseNameWithoutRepetitions(exercise.name)}
              <span style={{ marginLeft: '3px' }}>{progressPercent}%</span>
            </ProgressNameWorkout>
          </div>
          <ProgressBarContainer>
            <ProgressBarFill width={progressPercent} />
          </ProgressBarContainer>
        </div>
      );
    });
  };

  return (
    <WorkoutContainer>
      <Header />
      <WorkoutBlock>
        <WorkoutHead>{courseName || 'Загрузка...'}</WorkoutHead>

        <WorkoutVideo>
          {workout?.video ? (
            <StyledIframe
              src={workout.video}
              title={workout.name}
              allowFullScreen
            />
          ) : (
            <p>Видео недоступно</p>
          )}
        </WorkoutVideo>

        <WorkoutBlockProgress>
          <WorkoutProgressHead>
            {workout?.name.split('/')[0].trim() || 'Загрузка...'}
          </WorkoutProgressHead>

          <WorkoutBlockProgressExercises>
            {workout?.exercises && workout.exercises.length > 0 ? (
              renderExerciseProgress()
            ) : (
              <p>Упражнения не найдены</p>
            )}
          </WorkoutBlockProgressExercises>
          <WorkoutProgressButton
            onClick={() =>
              navigate(`/course/${courseId}/workout/${workoutId}/progress`)
            }
          >
            Заполнить свой прогресс
          </WorkoutProgressButton>
        </WorkoutBlockProgress>
      </WorkoutBlock>
    </WorkoutContainer>
  );
};

export default Workout;
