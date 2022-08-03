import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { CoursesItem } from '@components/courses-item/courses-item';
import type { ICourseItemProperties } from '@components/courses-item/courses-item-interface';
import { coursesSectionHelper } from './courses-section-helper';
import type { ICoursesSectionProperties, ICoursesSectionState } from './courses-section-interface';

export function CoursesSection({ coursesCategory = 'all' }: ICoursesSectionProperties):ReactElement {
  const [state, setState] = useState<ICoursesSectionState>({
    courses: [],
  });

  const { courses } = state;
  const helper = coursesSectionHelper(state, setState, coursesCategory);

  useEffect(():void => {
    helper.filterCourse();
  }, [coursesCategory]);

  return (
    <div className="courses-section section-padding">
      <div className="container">
        <div className="row">
          {
            courses.map((course) => {
              // eslint-disable-next-line max-len
              const { id, title, image, instructor, instructorImage, rating, reviews, price, category }: ICourseItemProperties = course;
              return (
                <CoursesItem
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  instructor={instructor}
                  instructorImage={instructorImage}
                  rating={rating}
                  reviews={reviews}
                  price={price}
                  category={category}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
