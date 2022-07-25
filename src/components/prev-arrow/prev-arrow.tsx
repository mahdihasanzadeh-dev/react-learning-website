/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import type { IPrevArrowProperties } from './prev-arrow-interface';

export function PrevArrow(
  { onClick, clickHandler, testimonialsData }: IPrevArrowProperties,
):ReactElement {
  return (
    <div
      className="prev-arrow"
      onClick={() => {
        onClick();
        clickHandler(testimonialsData);
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}
