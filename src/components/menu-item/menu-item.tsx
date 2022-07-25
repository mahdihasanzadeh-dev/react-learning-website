/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import type { IMenuItemProperties } from './menu-item-interface';

export function MenuItem({ path, title, subMenu }:IMenuItemProperties): ReactElement {
  return (

    <Fragment>
      {
        subMenu.length > 0
          ? (
            <li className="menu__item menu__item-has-children">
              <Link to={path} className="js-toggle-sub-menu">
                {title}
                {' '}
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
              <ul className="sub-menu js-sub-menu">
                {
                      subMenu.map((submenu) => (
                        <li className="sub-menu__item" key={submenu.id}>
                          <Link to={submenu.path}>{submenu.title}</Link>
                        </li>
                      ))
                  }
              </ul>
            </li>
          )
          : <li className="menu__item"><Link to={path}>{title}</Link></li>
      }
    </Fragment>
  );
}
