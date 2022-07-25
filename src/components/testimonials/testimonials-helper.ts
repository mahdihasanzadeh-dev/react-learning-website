/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { ISetState } from '@interface';
import type { ITestimonialsItemProperties } from '@components/testimonials-item/testimonials-item-interface';
import type { ITestimonialsState } from './testimonials-interface';

export function testimonialsHelper(
  state:ITestimonialsState,
  setState: ISetState<ITestimonialsState>,
) {
  const { activeTestimonialIndex } = state;

  function nextTestimonial(
    testimonialsData :ITestimonialsItemProperties[],
  ): void {
    if (activeTestimonialIndex === (testimonialsData.length) - 1) {
      setState({
        ...state,
        activeTestimonialIndex: 0,
      });
    } else {
      setState({
        ...state,
        activeTestimonialIndex: activeTestimonialIndex + 1,
      });
    }
  }

  function prevTestimonial(testimonialsData :ITestimonialsItemProperties[]): void {
    if (activeTestimonialIndex === 0) {
      setState({
        ...state,
        activeTestimonialIndex: (testimonialsData.length) - 1,
      });
    } else {
      setState({
        ...state,
        activeTestimonialIndex: activeTestimonialIndex - 1,
      });
    }
  }

  return {
    nextTestimonial,
    prevTestimonial,
  };
}
