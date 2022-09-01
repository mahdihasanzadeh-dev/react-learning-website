/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Suspense } from 'react';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import type { Location } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { CourseDetailsContent } from '@components/course-details-content/course-details-content';
import { CourseDetailsSideBar } from '@components/course-details-sidebar/course-details-sidebar';
import { Spinner } from '@components/spinner/spinner';
import { Language } from '@globals/enum';
import type { ILocationState } from './course-details-interface';
import './course-details.scss';

export function CourseDetails():ReactElement {
  const location: Location = useLocation();
  const { title = '' } = location.state as ILocationState;
  return (
    <Suspense fallback={<Spinner />}>
      <SEO
        pageTitle={`دوره آموزشی ${title}`}
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent title={title} />
      <section className="course-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CourseDetailsContent
                title={title}
              />
            </div>
            <div className="col-lg-4">
              <CourseDetailsSideBar
                title={title}
              />
            </div>
          </div>
        </div>
      </section>
    </Suspense>

  );
}
