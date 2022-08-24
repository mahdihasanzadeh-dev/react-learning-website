/* eslint-disable @typescript-eslint/naming-convention */

export type ICourseTabs = 'سرفصل'| 'توضیحات'| 'مدرس' | 'نظرات';
export interface ICourseDetailsTabsState {
    aciveTab: ICourseTabs;
}
