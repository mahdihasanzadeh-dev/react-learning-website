/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@components/menu/menu';
import { headerHelper } from './header-helper';
import type { IHeaderState } from './header-interface';
import './header.scss';

export function Header():ReactElement {
  const [state, setState] = useState<IHeaderState>({
    isOpenSideBar: false,
  });

  const { isOpenSideBar } = state;
  const helper = headerHelper(state, setState);

  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <div className="header__logo">
            <Link to="/">
              <span>mahdi</span>
              hasanzadeh
            </Link>
          </div>
          <button type="button" className="header__hamburger-btn" onClick={helper.openSideBar}>
            <span />
          </button>
          <button
            type="button"
            className={isOpenSideBar ? 'header__backdrop active' : 'header__backdrop'}
            onClick={helper.closeSideBar}
          />
          <nav className={isOpenSideBar ? 'header__menu open' : 'header__menu'}>
            <button type="button" className="header__close-btn" onClick={helper.closeSideBar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  );
}
