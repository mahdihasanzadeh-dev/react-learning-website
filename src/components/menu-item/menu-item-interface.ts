export interface IMenuItem {
    id?: number;
    title: string;
    path: string;
}

export interface IMenuItemProperties extends IMenuItem {
    subMenu: IMenuItem[] | [];
}
