import type { ISetState } from '@globals/interface';
import type { IMenuItemState } from './menu-item-interface';

export function menuItemHelper(state: IMenuItemState, setState:ISetState<IMenuItemState>) {
  function collapseSubMenu(id: number):void {
    if (id === state.clickedItem) {
      setState({
        ...state,
        clickedItem: null,
      });
    } else {
      setState({
        ...state,
        clickedItem: id,
      });
    }
  }

  return {
    collapseSubMenu,
  };
}
