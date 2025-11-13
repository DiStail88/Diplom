import { useContext } from 'react';
import { CourseContext } from '@/context/CourseContext';
import {
  MainHeader,
  MainTrainingBlock,
  MainButtonUp,
  ButtonUp,
} from './Main.styled';
import CourseCard from '../CourseCard/CourseCard';



function Main() {
  const { allCourses, userCourses, addCourse, removeCourse, loading } =
    useContext(CourseContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <p>Загрузка курсов...</p>;
  }

  const isCourseAdded = (id: string) => userCourses.some(c => c._id === id);

  return (
    <>
      <MainHeader>
        <h1>
          Начните заниматься спортом
          <br />и улучшите качество жизни
        </h1>
        <img src='/Home/mainlogo.png' alt='logo' />
      </MainHeader>

      <MainTrainingBlock>
        {allCourses.map(course => (
          <CourseCard
            key={course._id}
            course={course}
            onToggleCourse={
              isCourseAdded(course._id) ? removeCourse : addCourse
            }
            isAdded={isCourseAdded(course._id)}
          />
        ))}
      </MainTrainingBlock>

      <MainButtonUp>
        <ButtonUp onClick={scrollToTop}>Наверх ↑</ButtonUp>
      </MainButtonUp>
    </>
  );
}

export default Main;
