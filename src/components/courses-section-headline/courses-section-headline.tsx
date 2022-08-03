import type { ReactElement } from 'react';
import type { ICoursesSectionHeadlineProperties } from './courses-section-headline-interface';
import './courses-section-headline.scss';

export function CoursesSectionHeadline(
  { title, subTitle }: ICoursesSectionHeadlineProperties,
): ReactElement {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-8">
        <div className="section-title">
          <h2 className="title">{title}</h2>
          <p className="sub-title">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
