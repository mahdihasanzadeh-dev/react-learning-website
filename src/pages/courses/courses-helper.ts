import type { ICourseItemProperties } from '@components/courses-item/courses-item-interface';
import type { ISetState } from '@globals/interface';
import type { ICoursesState } from './courses-interface';

function inArray(category: string, uniqeCategory: string[]): number {
  return uniqeCategory.findIndex((item) => item === category);
}

export function coursesHelper(
  coursesData: ICourseItemProperties[],
  state: ICoursesState,
  setState: ISetState<ICoursesState>,
) {
  function findUniqueCategories():void {
    const uniqeCategory: string[] = [];

    coursesData.forEach((item:ICourseItemProperties) => {
      if (inArray(item.category, uniqeCategory) === -1) {
        uniqeCategory.push(item.category);
      }
    });

    setState({
      ...state,
      categories: uniqeCategory,
      aciveTab: uniqeCategory[0],
    });
  }

  function setActiveTab(category:string):void {
    setState({
      ...state,
      aciveTab: category,
    });
  }

  return {
    findUniqueCategories,
    setActiveTab,
  };
}
