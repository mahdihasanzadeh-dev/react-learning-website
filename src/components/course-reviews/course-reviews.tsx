import type { ReactElement } from 'react';
import { CourseReviewsItem } from '@components/course-reviews-item/course-reviews-item';

export function CourseReviews():ReactElement {
  return (
    <div className="course-reviews-list">
      <CourseReviewsItem />
      <CourseReviewsItem />
      <CourseReviewsItem />
    </div>
  );
}
