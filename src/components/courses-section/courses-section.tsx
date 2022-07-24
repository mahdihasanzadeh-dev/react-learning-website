import type { ReactElement } from 'react';
import { Button } from '@components/button/button';
import { CoursesItem } from '@components/courses-item/courses-item';
import type { ICourseItemProperties } from '@components/courses-item/courses-item-interface';
import CoursesData from '@data/courses.json';
import './courses-section.scss';

export function CoursesSection():ReactElement {
  return (
    <div className="courses-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title">
              <h2 className="title">دوره ها</h2>
              <p className="sub-title">دوره مدنظر خود را پیدا کنید</p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            CoursesData.map((course) => {
              // eslint-disable-next-line max-len
              const { id, title, image, instructor, instructorImage, rating, reviews, price }: ICourseItemProperties = course;
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
                />
              );
            })
          }
        </div>
        <div className="row">
          <div className="col-12 mt-3 d-flex justify-content-center">
            <Button
              text="مشاهده تمامی دوره ها"
              onClick={() => console.log('all course')}
              backgroundColor="main"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
