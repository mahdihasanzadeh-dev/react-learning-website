import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from '@pages/home/home';
import { Courses } from '@pages/courses/courses';
import { CourseDetails } from '@pages/course-details/course-details';
import { LogIn } from '@pages/login/login';
import { SignUp } from '@pages/signup/signup';
import { Contact } from '@pages/contact/contact';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import './globals/bootstrap.min.css';
import './globals/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <div className="main-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>,
);
