export interface Course {
  _id: string;
  nameRU: string;
  nameEN: string;
  description: string;
  difficulty?: string;
  durationInDays?: number;
  dailyDurationInMinutes?: {
    from: number;
    to: number;
  };
  workouts?: string[];
}

const BASE_URL = 'https://wedev-api.sky.pro/api/fitness';

export async function getAllCourses(): Promise<Course[]> {
  try {
    const response = await fetch(`${BASE_URL}/courses`);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки курсов: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении курсов:', error);
    throw error;
  }
}
