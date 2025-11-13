import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChoiseWorkoutBackground,
  ChoiseWorkoutBlock,
  ChoiseWorkoutHead,
  ChoiseWorkoutList,
  ChoiseWorkoutButton,
  ChoiseWorkoutListBlock,
  ChoiseWorkoutListName,
  ChoiseWorkoutListDesc,
  ChoiseWorkoutListText,
} from './ChoiseWorkout.styled';

interface Workout {
  _id: string;
  name: string;
}

interface WorkoutProgress {
  workoutId: string;
  workoutCompleted: boolean;
}

const ChoiseWorkout = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [progress, setProgress] = useState<WorkoutProgress[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  // Получаем список всех тренировок курса
  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(
          `https://wedev-api.sky.pro/api/fitness/courses/${courseId}/workouts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          console.error('Ошибка при получении тренировок:', res.status);
          setWorkouts([]);
          return;
        }

        const data = await res.json();

        // сортировка по номеру урока
        const sorted = [...data].sort((a, b) => {
          const getLessonNumber = (name: string) => {
            const match = name.match(/Урок\s*(\d+)/i);
            return match ? parseInt(match[1]) : 9999;
          };
          return getLessonNumber(a.name) - getLessonNumber(b.name);
        });

        setWorkouts(sorted);
      } catch (err) {
        console.error('Ошибка загрузки тренировок:', err);
        setWorkouts([]);
      }
    };
    fetchWorkouts();
  }, [courseId]);

  // Получаем прогресс пользователя по этому курсу
  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(
          `https://wedev-api.sky.pro/api/fitness/users/me/progress?courseId=${courseId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setProgress(data.workoutsProgress || []);
      } catch (err) {
        console.error('Ошибка загрузки прогресса:', err);
      }
    };
    fetchProgress();
  }, [courseId]);

  const handleStart = () => {
    if (selectedWorkout) {
      navigate(`/course/${courseId}/workout/${selectedWorkout}`);
    }
  };

  const isCompleted = (workoutId: string) => {
    return progress.some(p => p.workoutId === workoutId && p.workoutCompleted);
  };

  return (
    <ChoiseWorkoutBackground>
      <ChoiseWorkoutBlock>
        <ChoiseWorkoutHead>Выберите тренировку</ChoiseWorkoutHead>

        <ChoiseWorkoutList>
          {workouts.map(w => (
            <ChoiseWorkoutListBlock
              key={w._id}
              onClick={() => setSelectedWorkout(w._id)}
            >
              <img
                src={
                  isCompleted(w._id)
                    ? '/Workout/Done.svg'
                    : '/Workout/notcompleted.svg'
                }
                alt={isCompleted(w._id) ? 'completed' : 'not completed'}
                style={{ width: '24px', height: '24px' }}
              />

              <ChoiseWorkoutListText>
                <ChoiseWorkoutListName>
                  {w.name.split('/')[0].trim()}
                </ChoiseWorkoutListName>

                <ChoiseWorkoutListDesc>
                  {w.name.split('/').slice(1, -1).join('/').trim()}
                </ChoiseWorkoutListDesc>
              </ChoiseWorkoutListText>
            </ChoiseWorkoutListBlock>
          ))}
        </ChoiseWorkoutList>

        <ChoiseWorkoutButton disabled={!selectedWorkout} onClick={handleStart}>
          Начать
        </ChoiseWorkoutButton>
      </ChoiseWorkoutBlock>
    </ChoiseWorkoutBackground>
  );
};

export default ChoiseWorkout;
