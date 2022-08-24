import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import type { ICourseDetailsHeaderProperties } from './course-details-header-interface';
import './course-details-header.scss';

export function CourseDetailsHeader({ title }: ICourseDetailsHeaderProperties):ReactElement {
  return (
    <div className="course-header box">
      <h2>{title}</h2>
      <div className="rating">
        <span className="average-rating">(4.5)</span>
        <span className="average-stars">
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="reviewa">(230 نظر)</span>
      </div>
      <ul>
        <li>
          {' '}
          دانش آموزان دوره -
          {' '}
          <span>220</span>
        </li>
        <li>
          {' '}
          مدرس -
          {' '}
          <span>
            <NavLink to="/">مهدی حسن زاده</NavLink>
            {' '}
          </span>
        </li>
        <li>
          {' '}
          آخرین بروزرسانی -
          {' '}
          <span>آبان 1401</span>
        </li>
        <li>
          {' '}
          زبان -
          {' '}
          <span>فارسی</span>
        </li>
      </ul>
    </div>
  );
}
