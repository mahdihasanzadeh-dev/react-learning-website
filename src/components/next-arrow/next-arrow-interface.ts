import type { ITestimonialsItemProperties } from '@components/testimonials-item/testimonials-item-interface';

export interface INextArrowProperties {
    clickHandler: (
        testimonialsData :ITestimonialsItemProperties[]
    ) => void;
    onClick : ()=>void;
    testimonialsData:ITestimonialsItemProperties[]
}
