/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { ISetState } from '@interface';
import type { ITestimonialsItemProperties } from '@components/testimonials-item/testimonials-item-interface';
import type { ITestimonialsState } from './testimonials-interface';

export function testimonialsHelper(
  state:ITestimonialsState,
  setState: ISetState<ITestimonialsState>,
) {
  function slider(testimonialsData :ITestimonialsItemProperties[]): void {
    const { activeTestimonialIndex } = state;
    const testimonialsSection = document.querySelector('.testimonials-section') ?? document;
    const prevBtn = testimonialsSection.querySelector('.slick-prev');
    const nextBtn = testimonialsSection.querySelector('.slick-next');

    prevBtn?.addEventListener('click', () => {
      console.log('prevBtn');

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
    });

    nextBtn?.addEventListener('click', () => {
      if (activeTestimonialIndex === (testimonialsData.length) - 1) {
        setState({
          ...state,
          activeTestimonialIndex: 0,
        });
      } else {
        console.log('nextBtn');

        setState({
          ...state,
          activeTestimonialIndex: activeTestimonialIndex + 1,
        });
      }
    });
  }

  return {
    slider,
  };
}
