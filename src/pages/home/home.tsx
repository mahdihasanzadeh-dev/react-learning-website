import { HeroSection } from '@components/hero-section/hero-section';
import { Facts } from '@components/facts/facts';
import { CoursesSection } from '@components/courses-section/courses-section';
import { Testimonials } from '@components/testimonials/testimonials';
import { BecomeInstructor } from '@components/become-instructor/become-instructor';

export function Home() {
  return (
    <>
      <HeroSection />
      <Facts />
      <CoursesSection />
      <Testimonials />
      <BecomeInstructor />
    </>
  );
}
