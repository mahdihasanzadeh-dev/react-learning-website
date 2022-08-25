/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import type { IBackdropProperties } from './backdrop-interface';
import './backdrop.scss';

export function Backdrop({ show, modalClosed }: IBackdropProperties): ReactElement | null {
  return show ? <div className="Backdrop back-shadow" onClick={modalClosed} /> : null;
}
