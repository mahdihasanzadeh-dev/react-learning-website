import type { ISetState } from '@globals/interface';
import type { IHeaderState } from './header-interface';

export function headerHelper(state: IHeaderState, setState:ISetState<IHeaderState>) {
  function openSideBar(): void {
    setState({
      ...state,
      isOpenSideBar: true,
    });
  }

  function closeSideBar(): void {
    setState({
      ...state,
      isOpenSideBar: false,
    });
  }

  return {
    openSideBar,
    closeSideBar,
  };
}
