import CoursesData from '@data/courses.json';
import type { ISetState } from '@globals/interface';
import type { ICourseItemProperties } from '@components/courses-item/courses-item-interface';
import type { ICoursesSectionState } from './courses-section-interface';

export function coursesSectionHelper(
  state: ICoursesSectionState,
  setState:ISetState<ICoursesSectionState>,
  coursesCategory: string,
) {
  function filterCourse():void {
    if (coursesCategory !== 'all') {
      const filtredCourses: ICourseItemProperties[] = [];

      CoursesData.forEach((course: ICourseItemProperties) => {
        if (course.category === coursesCategory) {
          filtredCourses.push(course);
        }
      });

      setState({
        ...state,
        courses: filtredCourses,
      });
    } else {
      setState({
        ...state,
        courses: CoursesData.slice(0, 4),
      });
    }
  }

  return {
    filterCourse,
  };
}
