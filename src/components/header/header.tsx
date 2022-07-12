import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <div className="header__logo">
            <a href="#router-dom">
              <span>mahdi</span>
              hasanzadeh
            </a>
          </div>
          <button type="button" className="header__hamburger-btn js-header__menu-toggler">
            <span />
          </button>
          <div className="header__backdrop js-header__backdrop" />
          <nav className="header__menu js-header__menu">
            <button type="button" className="header__close-btn js-header__menu-toggler">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="menu">
              <li className="menu__item"><a href="#home">home</a></li>
              <li className="menu__item"><a href="#course">course</a></li>
              <li className="menu__item"><a href="#pages">pages</a></li>
              <li className="menu__item"><a href="#contact">contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
