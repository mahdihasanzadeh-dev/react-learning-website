/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { ISetState } from '@globals/interface';
import type { IStyleSwitcherState } from './style-switcher-interface';

function themeMode():void {
  if (localStorage.getItem('theme-dark') === 'false') {
    document.body.classList.remove('t-dark');
  } else {
    document.body.classList.add('t-dark');
  }
}

export function styleSwitcherHelper(
  state:IStyleSwitcherState,
  setState:ISetState<IStyleSwitcherState>,
) {
  function styleSwitcheToggle(): void {
    setState({
      ...state,
      isActiveStyleSwitcherToggler: !state.isActiveStyleSwitcherToggler,
    });
  }

  function setColorPlate(colorPlateName: string): void {
    const colorStyle:Element | null = document.querySelector('.js-color-style');
    localStorage.setItem('color', colorPlateName);
    let path: string[] | undefined = colorStyle?.getAttribute('href')?.split('/');
    path = path?.slice(0, path.length - 1);
    colorStyle?.setAttribute('href', `${path?.join('/')}/${colorPlateName}.css`);

    setState({
      ...state,
      paletColor: colorPlateName,
    });
  }

  function toggleDarkMode(event: { target: { checked: boolean; }; }):void {
    const { checked } = event.target;

    if (checked) {
      localStorage.setItem('theme-dark', 'true');
    } else {
      localStorage.setItem('theme-dark', 'false');
    }

    themeMode();

    setState({
      ...state,
      isDarkMode: checked,
    });
  }

  function toggleGlassEffect(event: { target: { checked: boolean; }; }):void {
    const { checked } = event.target;
    const glassStyle:Element | null = document.querySelector('.js-glass-style');

    if (checked) {
      localStorage.setItem('glass-effect', 'true');
      glassStyle?.removeAttribute('disabled');
    } else {
      localStorage.setItem('glass-effect', 'false');
      glassStyle?.setAttribute('disabled', 'true');
    }

    setState({
      ...state,
      isGlassEffect: checked,
    });
  }

  return {
    styleSwitcheToggle,
    setColorPlate,
    toggleDarkMode,
    toggleGlassEffect,
  };
}
