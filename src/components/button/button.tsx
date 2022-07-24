/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { ReactElement } from 'react';
import { IButtonProperties, ButtonTypes, ButtonSize } from './button-interface';
import './button.scss';

export function Button({
  text,
  isDisabled = false,
  type = ButtonTypes.filled,
  size = ButtonSize.medium,
  backgroundColor = 'transparent',
  textColor = 'white',
  onClick,
  shadow = true,
}:IButtonProperties):ReactElement {
  const shadows: string = shadow ? 'shadow' : '';
  const disabled: string = isDisabled ? 'disabled' : '';

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'btn',
        `${size}`,
        `${type}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(' ')}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
