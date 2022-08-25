/* eslint-disable @typescript-eslint/naming-convention */
import type { ISetState } from '@globals/interface';
import type { ICourseDetailsSideBarState } from './course-details-sidebar-interface';

export function courseDetailsSideBarHelper(
  state:ICourseDetailsSideBarState,
  setState:ISetState<ICourseDetailsSideBarState>,
) {
  function showModalHandler(): void {
    setState({
      ...state,
      showModal: true,
    });
  }

  function closeModalHandler(): void {
    setState({
      ...state,
      showModal: false,
    });
  }

  return {
    showModalHandler,
    closeModalHandler,
  };
}
