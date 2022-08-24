import type { ReactElement } from 'react';
import { CourseDetailsHeader } from '@components/course-details-header/course-details-header';
import { CourseDetailsTabs } from '@components/course-details-tabs/course-details-tabs';
import type { ICourseDetailsContentProperties } from './course-details-content-interface';

export function CourseDetailsContent({ title }: ICourseDetailsContentProperties):ReactElement {
  return (
    <>
      <CourseDetailsHeader
        title={title}
      />
      <CourseDetailsTabs />
    </>
  );
}
