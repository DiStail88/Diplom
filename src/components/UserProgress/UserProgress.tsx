import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  UserProgressBackground,
  UserProgressBlock,
  UserProgressHead,
  UserProgressQuestions,
  UserProgressInput,
  UserProgressButton,
  UserProgressDoneBlock,
  UserProgressDoneHead,
  UserProgressDoneImg,
  UserProgressBlockQuestions,
  UserProgressQuestionsName,
  UserProgressNameandInput
} from './UserProgress.styled';

interface Exercise {
  name: string;
  quantity: number;
  _id: string;
}

const UserProgress = () => {
  const { courseId, workoutId } = useParams();
  const navigate = useNavigate();

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [progress, setProgress] = useState<number[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchWorkoutAndProgress = async () => {
      const token = localStorage.getItem('token');

      try {
        // 1️⃣ Получаем данные тренировки
        const workoutRes = await fetch(
          `https://wedev-api.sky.pro/api/fitness/workouts/${workoutId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!workoutRes.ok) {
          console.error('Ошибка тренировки:', workoutRes.status);
          return;
        }

        const workoutData = await workoutRes.json();
        setExercises(workoutData.exercises || []);

        // 2️⃣ Получаем прогресс пользователя по этой тренировке
        const progressRes = await fetch(
          `https://wedev-api.sky.pro/api/fitness/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        let progressData: number[] = [];

        if (progressRes.ok) {
          const progressJson = await progressRes.json();
          if (
            progressJson.progressData &&
            Array.isArray(progressJson.progressData)
          ) {
            progressData = progressJson.progressData;
          }
        }

        if (progressData.length !== workoutData.exercises?.length) {
          progressData = new Array(workoutData.exercises?.length || 0).fill(0);
        }

        setProgress(progressData);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchWorkoutAndProgress();
  }, [courseId, workoutId]);

  const handleChange = (index: number, value: number) => {
    const newProgress = [...progress];
    const maxQuantity = exercises[index]?.quantity || 0;
    newProgress[index] = Math.max(0, Math.min(value, maxQuantity));
    setProgress(newProgress);
  };

  const handleSave = async () => {
    if (!courseId || !workoutId) return;

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(
        `https://wedev-api.sky.pro/api/fitness/courses/${courseId}/workouts/${workoutId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': '',
          },
          body: JSON.stringify({ progressData: progress }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error('Ошибка при сохранении прогресса:', res.status, text);
        alert('Ошибка при сохранении прогресса');
        return;
      }

      setSaved(true);
      setTimeout(() => navigate(-1), 1500);
    } catch (err) {
      console.error('Ошибка PATCH запроса:', err);
      alert('Ошибка сети при сохранении прогресса');
    }
  };

  return (
    <UserProgressBackground>
      {!saved ? (
        <UserProgressBlock>
          <UserProgressHead>Мой прогресс</UserProgressHead>

          <UserProgressBlockQuestions>
            {' '}
            <UserProgressQuestions>
              {exercises.map((ex, i) => (
                <UserProgressNameandInput key={ex._id}>
                  <UserProgressQuestionsName
                  >
                    {ex.name}
                  </UserProgressQuestionsName>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <UserProgressInput
                      type='number'
                      max={ex.quantity}
                      value={progress[i] ?? 0}
                      onChange={e => handleChange(i, Number(e.target.value))}
                      placeholder='0'
                    />
                  </div>
                </UserProgressNameandInput>
              ))}
            </UserProgressQuestions>
          </UserProgressBlockQuestions>

          <UserProgressButton onClick={handleSave}>
            Сохранить
          </UserProgressButton>
        </UserProgressBlock>
      ) : (
        <UserProgressDoneBlock>
          <UserProgressDoneHead>Ваш прогресс засчитан!</UserProgressDoneHead>
          <UserProgressDoneImg src='/Workout/Done.svg' alt='Готово' />
        </UserProgressDoneBlock>
      )}
    </UserProgressBackground>
  );
};

export default UserProgress;
