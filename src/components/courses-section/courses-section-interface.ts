import type { ICourseItemProperties } from '@components/courses-item/courses-item-interface';

export interface ICoursesSectionProperties {
    coursesCategory: string;
}

export interface ICoursesSectionState {
    courses:ICourseItemProperties[]
}
