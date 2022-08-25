import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './course-reviews-item.scss';

export function CourseReviewsItem():ReactElement {
  return (
    <div className="course-reviews-item">
      <div className="img-box">
        <img src="/src/assets/img/review/1.png" alt="review img" />
      </div>
      <h4>مهدی حسن زاده</h4>
      <div className="stars-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <span className="date">1 هفته پیش</span>
      </div>
      <p>
        یک دوره فوق العاده.من موارد زیادی رو در این دوره یاد گرفتم و از استاد دوره بخاطر فن بیان
        وتسلطشون تشکر میکنم
      </p>
    </div>
  );
}
