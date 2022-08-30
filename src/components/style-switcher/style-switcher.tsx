/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import type { IStyleSwitcherState } from './style-switcher-interface';
import { styleSwitcherHelper } from './style-switcher-helper';
import './style-switcher.scss';

export function StyleSwitcher(): ReactElement {
  const [state, setState] = useState<IStyleSwitcherState>({
    isActiveStyleSwitcherToggler: false,
    paletColor: (localStorage.getItem('color') != null) ? localStorage.getItem('color') : 'color-1',
    isDarkMode: (localStorage.getItem('theme-dark') !== 'false'),
    isGlassEffect: (localStorage.getItem('glass-effect') !== 'false'),
  });

  const { isActiveStyleSwitcherToggler, paletColor, isDarkMode, isGlassEffect } = state;
  const helper = styleSwitcherHelper(state, setState);

  return (
    <div className={`style-switcher ${isActiveStyleSwitcherToggler ? 'open' : ''}`}>
      <button type="button" className="style-switcher__toggler" onClick={helper.styleSwitcheToggle}>
        <FontAwesomeIcon icon={isActiveStyleSwitcherToggler ? faTimes : faCog} />
      </button>
      <h3>شخصی سازی</h3>
      <div className="style-switcher__item">
        <div className="theme-colors">
          <button type="button" className={paletColor === 'color-1' ? 'color-1 active' : 'color-1'} onClick={() => helper.setColorPlate('color-1')} />
          <button type="button" className={paletColor === 'color-2' ? 'color-2 active' : 'color-2'} onClick={() => helper.setColorPlate('color-2')} />
          <button type="button" className={paletColor === 'color-3' ? 'color-3 active' : 'color-3'} onClick={() => helper.setColorPlate('color-3')} />
          <button type="button" className={paletColor === 'color-4' ? 'color-4 active' : 'color-4'} onClick={() => helper.setColorPlate('color-4')} />
          <button type="button" className={paletColor === 'color-5' ? 'color-5 active' : 'color-5'} onClick={() => helper.setColorPlate('color-5')} />
        </div>
      </div>
      <div className="style-switcher__item">
        <Form>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="حالت شب"
            checked={isDarkMode}
            onChange={helper.toggleDarkMode}
          />
        </Form>
      </div>
      <div className="style-switcher__item">
        <Form>
          <Form.Check
            type="switch"
            id="glass-effect-switch"
            label="حالت شیشه ای"
            checked={isGlassEffect}
            onChange={helper.toggleGlassEffect}
          />
        </Form>
      </div>
    </div>
  );
}
