/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { Backdrop } from '@components/backdrop/backdrop';
import type { IModalProperties } from './modal-interface';
import './modal.scss';

export function Modal({ show, modalClosed, children }: IModalProperties):ReactElement {
  return (
    <>
      <Backdrop show={show} modalClosed={modalClosed} />
      <div
        className="modal-container"
        style={{ transform: show ? 'translateX(0)' : 'translateX(-100vw)',
          opacity: show ? '1' : '0' }}
      >
        {children}
      </div>
    </>

  );
}
