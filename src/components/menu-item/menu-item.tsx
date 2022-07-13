/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
import type { ReactElement } from 'react';
import { Fragment, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import type { IMenuItemProperties } from './menu-item-interface';

function MenuItem({ path, title, subMenu }:IMenuItemProperties): ReactElement {
  return (

    <Fragment>
      {
        subMenu.length > 0
          ? (
            <li className="menu__item menu__item-has-children">
              <a href={path} className="js-toggle-sub-menu">
                {title}
                {' '}
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <ul className="sub-menu js-sub-menu">
                {
                      subMenu.map((submenu) => (
                        <li className="sub-menu__item" key={submenu.id}>
                          <a href={submenu.path}>{submenu.title}</a>
                        </li>
                      ))
                  }
              </ul>
            </li>
          )
          : <li className="menu__item"><a href={path}>{title}</a></li>
      }
    </Fragment>
  );
}

export default memo(MenuItem);
