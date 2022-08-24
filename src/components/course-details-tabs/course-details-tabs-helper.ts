import type { ISetState } from '@globals/interface';
import type { ICourseDetailsTabsState } from './course-details-tabs-interface';

export function courseDetailsTabsHelper(
  state: ICourseDetailsTabsState,
  setState: ISetState<ICourseDetailsTabsState>,
) {
  function setActiveTab(tab:string):void {
    setState({
      ...state,
      aciveTab: tab,
    });
  }

  return {
    setActiveTab,
  };
}
