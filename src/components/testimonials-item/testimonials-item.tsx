/* eslint-disable max-len */

import type { ReactElement } from 'react';
import type { ITestimonialsItemProperties } from './testimonials-item-interface';
import './testimonials-item.scss';

export function TestimonialsItem({ name, role, avatar, comment }: ITestimonialsItemProperties):ReactElement {
  return (
    <div className="testimonials-item" data-js-testimonial-img={avatar}>
      <p className="text-1">{comment}</p>
      <h3>{name}</h3>
      <p className="text-2">{role}</p>
    </div>
  );
}
