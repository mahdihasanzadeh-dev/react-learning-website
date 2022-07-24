import type { ReactElement } from 'react';
import { MenuItem } from '@components/menu-item/menu-item';
import menuData from '@data/menu.json';
import type { IMenuItemProperties } from '@components/menu-item/menu-item-interface';
import './menu.scss';

export function Menu():ReactElement {
  return (
    <ul className="menu">
      {
            menuData.map((menuItem) => {
              const { id, path, title, subMenu }:IMenuItemProperties = menuItem;

              return (
                <MenuItem
                  key={id}
                  path={path}
                  title={title}
                  subMenu={subMenu}
                />
              );
            })
        }
    </ul>
  );
}
