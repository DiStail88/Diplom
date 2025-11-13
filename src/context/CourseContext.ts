import { createContext } from 'react';
import { Course } from '@/api/coursesApi';

export interface CourseContextType {
  allCourses: Course[];
  userCourses: Course[];
  addCourse: (courseId: string) => Promise<void>;
  removeCourse: (courseId: string) => Promise<void>;
  refreshUserCourses: () => Promise<void>;
  loading: boolean;
}

export const CourseContext = createContext<CourseContextType>({
  allCourses: [],
  userCourses: [],
  addCourse: async () => {},
  removeCourse: async () => {},
  refreshUserCourses: async () => {},
  loading: false,
});
