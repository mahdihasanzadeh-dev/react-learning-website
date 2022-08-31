/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { menuItemHelper } from './menu-item-helper';
import type { IMenuItemProperties, IMenuItemState } from './menu-item-interface';

export function MenuItem({ path, title, subMenu, id }:IMenuItemProperties): ReactElement {
  const [state, setState] = useState<IMenuItemState>({
    clickedItem: null,
  });

  const { clickedItem } = state;
  const helper = menuItemHelper(state, setState);

  return (
    <Fragment>
      {
        subMenu.length > 0
          ? (
            <li className="menu__item menu__item-has-children">
              <div>
                <Link
                  to={path}
                >
                  {title}
                  {' '}
                </Link>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="toggle-sub-menu"
                  onClick={() => helper.collapseSubMenu(id)}
                />
              </div>

              <ul className={clickedItem === id ? 'sub-menu active' : 'sub-menu'}>
                {
                      subMenu.map((submenu) => (
                        <li className="sub-menu__item" key={submenu.id}>
                          <Link
                            to={submenu.path}
                            state={{
                              title: submenu.title,
                            }}
                          >
                            {submenu.title}

                          </Link>
                        </li>
                      ))
                  }
              </ul>
            </li>
          )
          : <li className="menu__item"><div><Link to={path}>{title}</Link></div></li>
      }
    </Fragment>
  );
}
