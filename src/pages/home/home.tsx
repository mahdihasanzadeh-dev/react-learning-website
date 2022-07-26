import type { ReactElement } from 'react';
import { SEO } from '@components/seo/seo';
import { HeroSection } from '@components/hero-section/hero-section';
import { Facts } from '@components/facts/facts';
import { CoursesSection } from '@components/courses-section/courses-section';
import { Testimonials } from '@components/testimonials/testimonials';
import { BecomeInstructor } from '@components/become-instructor/become-instructor';
import { Language } from '@globals/enum';

export function Home():ReactElement {
  return (
    <>
      <SEO
        pageTitle="صفحه اصلی"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <HeroSection />
      <Facts />
      <CoursesSection />
      <Testimonials />
      <BecomeInstructor />
    </>
  );
}
