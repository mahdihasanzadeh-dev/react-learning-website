import ReactDOM from 'react-dom/client';
import { Header } from '@components/header/header';
import { HeroSection } from '@components/hero-section/hero-section';
import { Facts } from '@components/facts/facts';
import { CoursesSection } from '@components/courses-section/courses-section';
import { Testimonials } from '@components/testimonials/testimonials';
import { BecomeInstructor } from '@components/become-instructor/become-instructor';
import './globals/bootstrap.min.css';
import './globals/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="main-wrapper">
    <Header />
    <HeroSection />
    <Facts />
    <CoursesSection />
    <Testimonials />
    <BecomeInstructor />
  </div>,
);
