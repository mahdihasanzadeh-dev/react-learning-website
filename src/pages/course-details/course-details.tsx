/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';
import type { Location } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb';
import { Language } from '@globals/enum';
import type { ILocationState } from './course-details-interface';

export function CourseDetails():ReactElement {
  const location: Location = useLocation();
  const { title = '' } = location.state as ILocationState;
  return (
    <>
      <SEO
        pageTitle={`دوره آموزشی ${title}`}
        description="یادگیری آسان با وب سایت آموزشی ..."
        keywords={['وب سایت آموزشی', 'یادگیری آنلاین']}
        language={Language.FA_IR}
      />
      <BreadcrumbComponent title={title} />
      <h1>CourseDetails</h1>
    </>

  );
}
