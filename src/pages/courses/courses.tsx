import { useEffect, useState } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import { Language } from '@globals/enum';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { CoursesSection } from '@components/courses-section/courses-section';
import { CoursesSectionHeadline } from '@components/courses-section-headline/courses-section-headline';
import CoursesData from '@data/courses.json';
import { Button } from '@components/button/button';
import { Paginate } from '@components/paginate/paginate';
import type { ICoursesState } from './courses-interface';
import { coursesHelper } from './courses-helper';
import './courses.scss';

export function Courses():ReactElement {
  const [state, setState] = useState<ICoursesState>({
    categories: [],
    aciveTab: '',
  });

  const { categories, aciveTab } = state;
  const helper = coursesHelper(CoursesData, state, setState);

  useEffect(():void => {
    helper.findUniqueCategories();
  }, []);

  return (
    <>
      <SEO
        pageTitle="دوره های آموزشی"
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent />
      <section className="course-section section-padding">
        <div className="container">
          <CoursesSectionHeadline
            title="دوره های ما"
            subTitle="دوره مد نظر خود را پیدا کنید"
          />
          <div className="row">
            <div className="col-12">
              <div className="category__container">
                {
                  categories.map((category: string) => (
                    <Button
                      text={category}
                      backgroundColor={category === aciveTab ? 'main' : 'white'}
                      textColor={category === aciveTab ? 'white' : 'default'}
                      onClick={() => helper.setActiveTab(category)}
                      isDisabled={category === aciveTab}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CoursesSection coursesCategory={aciveTab} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3">
              <Paginate />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
