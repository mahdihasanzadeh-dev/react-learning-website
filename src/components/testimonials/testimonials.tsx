/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { useId, useState } from 'react';
import { TestimonialsItem } from '@components/testimonials-item/testimonials-item';
import { NextArrow } from '@components/next-arrow/next-arrow';
import { PrevArrow } from '@components/prev-arrow/prev-arrow';
import { DecorationCircles } from '@components/decoration-circles/decoration-circles';
import { DecorationImgs } from '@components/decoration-imgs/decoration-imgs';
import Slider from 'react-slick';
import testimonialsData from '@data/testimonials.json';
import { testimonialsHelper } from './testimonials-helper';
import type { ITestimonialsState } from './testimonials-interface';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonials.scss';

export function Testimonials():ReactElement {
  const [state, setState] = useState<ITestimonialsState>({
    activeTestimonialIndex: 0,
  });

  const { activeTestimonialIndex } = state;
  const helper = testimonialsHelper(state, setState);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow
      onClick={() => { console.log('clicked'); }}
      clickHandler={() => helper.nextTestimonial(testimonialsData)}
      testimonialsData={testimonialsData}
    />,
    prevArrow: <PrevArrow
      onClick={() => { console.log('clicked'); }}
      clickHandler={() => helper.prevTestimonial(testimonialsData)}
      testimonialsData={testimonialsData}
    />,
  };

  return (
    <div className="testimonials-section section-padding">
      <DecorationCircles />
      <DecorationImgs testimonialsData={testimonialsData} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-title text-center">
              <h2 className="title">نظرات دانشجویان</h2>
              <p className="sub-title">در مورد ما چه می گویند</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="img-box rounded-circle">
              <img src={testimonialsData[activeTestimonialIndex].avatar} className="w-100 rounded-circle js-testimonial-img" alt="student pic" />
            </div>
            <Slider {...settings}>
              {
                testimonialsData.map((testimonial) => {
                  const { name, role, avatar, comment } = testimonial;
                  const id = useId();
                  return (
                    <TestimonialsItem
                      key={id}
                      name={name}
                      role={role}
                      avatar={avatar}
                      comment={comment}
                    />
                  );
                })
              }

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
