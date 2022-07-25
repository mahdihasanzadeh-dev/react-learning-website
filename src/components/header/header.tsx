import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@components/menu/menu';
import './header.scss';

export function Header():ReactElement {
  return (
    <header className="header">
      <div className="container">
        <div className="header__main d-flex">
          <div className="header__logo">
            <Link to="/">
              <span>mahdi</span>
              hasanzadeh
            </Link>
          </div>
          <button type="button" className="header__hamburger-btn js-header__menu-toggler">
            <span />
          </button>
          <div className="header__backdrop js-header__backdrop" />
          <nav className="header__menu js-header__menu">
            <button type="button" className="header__close-btn js-header__menu-toggler">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  );
}
