import type { ITestimonialsItemProperties } from '@components/testimonials-item/testimonials-item-interface';

export interface IPrevArrowProperties {
    clickHandler: (
        testimonialsData :ITestimonialsItemProperties[]
    ) => void;
    onClick : ()=>void;
    testimonialsData:ITestimonialsItemProperties[]
}
