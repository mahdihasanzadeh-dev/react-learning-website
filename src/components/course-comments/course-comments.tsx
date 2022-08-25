import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { RatingBars } from '@components/rating-bars/rating-bars';
import { CourseReviews } from '@components/course-reviews/course-reviews';
import './course-comments.scss';
import { CourseReviewsFilter } from '@components/course-reviews-filter/course-reviews-filter';
import { Button } from '@components/button/button';

export function CourseComments():ReactElement {
  return (
    <div className="course-comments box">
      <div className="rating-summary">
        <h3 className="mb-4">تظرات دانشجویان</h3>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center text-center">
            <div className="rating-box">
              <div className="average-rating">4.5</div>
              <div className="average-stars">
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="reviews">230 نظر</div>
            </div>
          </div>
          <div className="col-md-8">
            <RatingBars />
          </div>
        </div>
        <CourseReviewsFilter />
        <CourseReviews />
        <Button
          backgroundColor="main"
          text="نظرات بیشتر"
          onClick={() => console.log('more reviews')}
        />
      </div>
    </div>
  );
}
