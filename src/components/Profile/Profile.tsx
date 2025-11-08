import { useContext } from 'react';
import Header from '../Header/Header';
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileHead,
  ProfileBlockUser,
  ProfileBlock,
  ProfileLogo,
  ProfileInfo,
  ProfileButtonLogout,
  ProfileBlockUserInfo,
  ProfileBlockInfo,
  ProfileCoursesBlock,
  ProfileCoursesHead,
  ProfileCoursesList,
} from './Profile.styled';
import { AuthContext } from '@/context/AuthContext';
import { CourseContext } from '@/context/CourseContext';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const { userCourses, removeCourse } = useContext(CourseContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <ProfileContainer>
      <Header />
      <ProfileWrapper>
        <ProfileBlock>
          <ProfileHead>Профиль</ProfileHead>
          <ProfileBlockUser>
            <ProfileBlockUserInfo>
              <ProfileLogo>
                <img src='/Profile/profilelogo.png' alt='' />
              </ProfileLogo>
              <ProfileBlockInfo>
                <ProfileInfo>{`Логин: ${user?.email}`}</ProfileInfo>
                <ProfileButtonLogout onClick={handleLogout}>
                  Выйти
                </ProfileButtonLogout>
              </ProfileBlockInfo>
            </ProfileBlockUserInfo>
          </ProfileBlockUser>
        </ProfileBlock>

        <ProfileCoursesBlock>
          <ProfileCoursesHead>Мои курсы</ProfileCoursesHead>

          <ProfileCoursesList>
            {userCourses.length > 0 ? (
              userCourses.map(course => (
                <CourseCard
                  key={course._id}
                  course={course}
                  onToggleCourse={() => removeCourse(course._id)}
                  isAdded={true}
                  showProgress={true}
                />
              ))
            ) : (
              <p>Вы ещё не добавили ни одного курса.</p>
            )}
          </ProfileCoursesList>
        </ProfileCoursesBlock>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default Profile;
