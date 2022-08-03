import { Home } from '@pages/home/home';
import { Courses } from '@pages/courses/courses';
import { CourseDetails } from '@pages/course-details/course-details';
import { LogIn } from '@pages/login/login';
import { SignUp } from '@pages/signup/signup';
import { Contact } from '@pages/contact/contact';

export const ROUTES = {
  home: { id: '1', element: Home, path: '/' },
  courses: { id: '2', element: Courses, path: '/courses' },
  courseDetails: { id: '3', element: CourseDetails, path: '/courses/:courseId' },
  logIn: { id: '4', element: LogIn, path: '/login' },
  signup: { id: '4', element: SignUp, path: '/signup' },
  contact: { id: '4', element: Contact, path: '/contact' },
};
