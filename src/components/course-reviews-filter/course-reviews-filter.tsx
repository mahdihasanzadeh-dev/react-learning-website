import type { ReactElement } from 'react';
import { Input } from '@components/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './course-reviews-filter.scss';

export function CourseReviewsFilter():ReactElement {
  return (
    <div className="course-reviews-filter">
      <h3>نظرات</h3>
      <div className="form-group">
        <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
        <Input
          type="select"
          className="form-control"
          options={
                [
                  {
                    value: '',
                    text: 'تمامی نظرات',
                  },
                  {
                    value: '1',
                    text: '1 ستاره',
                  },
                  {
                    value: '2',
                    text: '2 ستاره',
                  },
                  {
                    value: '3',
                    text: '3 ستاره',
                  },
                  {
                    value: '4',
                    text: '4 ستاره',
                  },
                  {
                    value: '5',
                    text: '5 ستاره',
                  },
                ]
            }
        />
      </div>
    </div>
  );
}
