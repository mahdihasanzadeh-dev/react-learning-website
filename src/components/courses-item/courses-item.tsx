/* eslint-disable react/jsx-one-expression-per-line */
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import type { ICourseItemProperties } from './courses-item-interface';
import './courses-item.scss';

export function CoursesItem({
  id,
  title,
  image,
  instructor,
  instructorImage,
  rating,
  reviews,
  price,
}: ICourseItemProperties): ReactElement {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="courses-item">
        <a href={`#course-detail${id}`} className="link">
          <div className="courses-item__inner">
            <div className="img-box">
              <img src={image} alt="course" />
            </div>
            <h3 className="title">{title}</h3>
            <div className="instructor">
              <img src={instructorImage} alt="instructor course" />
              <span className="instructor__name">{instructor}</span>
            </div>
            <div className="rating">
              <span className="average-rating">({rating})</span>
              <span className="average-stars">
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="reviews">({reviews})</span>
            </div>
            <div className="price">{price}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
