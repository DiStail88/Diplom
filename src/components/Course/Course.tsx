import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import {
  CourseInfoBlock,
  CourseImg,
  CourseNecessity,
  CourseNecessityHead,
  CourseDirections,
  CourseDirectionsHead,
  CourseDirectionsList,
  CoursContainer,
  CourseNecessityItem,
  NumberCircle,
  CourseNecessityBlockItem,
  CourseNecessityItemText,
  CourseFrameItem,
  CourseDirectionsListItem,
  CourseAppend,
  CourseAppendBlock,
  CourseAppendInfo,
  CourseAppendHead,
  CourseAppendList,
  CourseAppendListItem,
  CourseAppendButton,
  CourseAppendImgBlock,
  CourseAppendImg1,
  CourseAppendImg2,
  CourseAppendImg3,
} from './Course.styled';
import { AuthContext } from '@/context/AuthContext';
import { CourseContext } from '@/context/CourseContext';

interface Course {
  _id: string;
  nameRU: string;
  nameEN: string;
  description: string;
  directions: string[];
  fitting: string[];
  difficulty: string;
  durationInDays: number;
  dailyDurationInMinutes?: { from: number; to: number };
}

const BASE_URL = 'https://wedev-api.sky.pro/api/fitness';

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  const { isAuth } = useContext(AuthContext);
  const { userCourses, addCourse, removeCourse } = useContext(CourseContext);

  const [isAdded, setIsAdded] = useState(false);

  const getCourseImage = (nameEN: string) => {
    switch (nameEN.toLowerCase()) {
      case 'yoga':
        return '/Course/Yoga.png';
      case 'fitness':
        return '/Course/Fitness.png';
      case 'stretching':
        return '/Course/Stretching.png';
      case 'stepairobic':
        return '/Course/StepAirpbic.png';
      case 'bodyflex':
        return '/Course/Bodyflex.png';
      default:
        return '/Course/Default.png';
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`${BASE_URL}/courses/${id}`);
        if (!res.ok) throw new Error('Ошибка загрузки курса');
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  useEffect(() => {
    if (!isAuth) {
      setIsAdded(false);
      return;
    }
    if (course) {
      setIsAdded(userCourses.some(c => c._id === course._id));
    }
  }, [isAuth, userCourses, course]);

  const navigate = useNavigate();

  const handleCourseButtonClick = async () => {
    if (!isAuth) {
      navigate('/login');
      return;
    }

    if (!course) return;

    try {
      if (isAdded) {
        await removeCourse(course._id);
        setIsAdded(false);
      } else {
        await addCourse(course._id);
        setIsAdded(true);
      }
    } catch (err) {
      console.error('Ошибка при обновлении курса', err);
    }
  };

  if (loading) return <div>Загрузка курса...</div>;
  if (!course) return <div>Курс не найден</div>;

  return (
    <CoursContainer>
      <Header />
      <CourseInfoBlock>
        <CourseImg>
          <img src={getCourseImage(course.nameEN)} alt={course.nameRU} />
        </CourseImg>

        <CourseNecessity>
          <CourseNecessityHead>Подойдет для вас, если:</CourseNecessityHead>
          <CourseNecessityBlockItem>
            {course.fitting && course.fitting.length > 0 ? (
              course.fitting.map((item, i) => (
                <CourseNecessityItem key={i}>
                  <CourseFrameItem>
                    <NumberCircle>{i + 1}</NumberCircle>
                    <CourseNecessityItemText>{item}</CourseNecessityItemText>
                  </CourseFrameItem>
                </CourseNecessityItem>
              ))
            ) : (
              <p>Информация отсутствует</p>
            )}
          </CourseNecessityBlockItem>
        </CourseNecessity>

        <CourseDirections>
          <CourseDirectionsHead>Направления</CourseDirectionsHead>
          <CourseDirectionsList>
            {course.directions.length ? (
              course.directions.map((dir, i) => (
                <CourseDirectionsListItem key={i}>
                  {dir.charAt(0).toUpperCase() + dir.slice(1)}
                </CourseDirectionsListItem>
              ))
            ) : (
              <p>Нет указанных направлений</p>
            )}
          </CourseDirectionsList>
        </CourseDirections>
      </CourseInfoBlock>

      <CourseAppendBlock>
        <CourseAppend>
          <CourseAppendInfo>
            <CourseAppendHead>Начните путь к новому телу</CourseAppendHead>
            <CourseAppendList>
              <CourseAppendListItem>
                проработка всех групп мышц
              </CourseAppendListItem>
              <CourseAppendListItem>тренировка суставов</CourseAppendListItem>
              <CourseAppendListItem>
                улучшение циркуляции крови
              </CourseAppendListItem>
              <CourseAppendListItem>
                упражнения заряжают бодростью
              </CourseAppendListItem>
              <CourseAppendListItem>
                помогают противостоять стрессам
              </CourseAppendListItem>
            </CourseAppendList>

            <CourseAppendButton onClick={handleCourseButtonClick}>
              {!isAuth
                ? 'Войдите, чтобы добавить курс'
                : isAdded
                  ? 'Удалить курс'
                  : 'Добавить курс'}
            </CourseAppendButton>
          </CourseAppendInfo>
          <CourseAppendImgBlock>
            <CourseAppendImg1 src='/Course/vector1.png' alt='vector1' />
            <CourseAppendImg2 src='/Course/vector2.png' alt='vector2' />
          </CourseAppendImgBlock>
        </CourseAppend>
        <CourseAppendImg3 src='/Course/courseimginfo.png' alt='img' />
      </CourseAppendBlock>
    </CoursContainer>
  );
};

export default Course;
