export interface IMenuItem {
    id: number;
    title: string;
    path: string;
}

export interface IMenuItemProperties extends IMenuItem {
    subMenu: IMenuItem[] | [];
}

export interface IMenuItemState {
    clickedItem: null | number;
}
