/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { INextArrowProperties } from './next-arrow-interface';

export function NextArrow(
  { onClick, clickHandler, testimonialsData }: INextArrowProperties,
):ReactElement {
  return (
    <div
      className="next-arrow"
      onClick={() => {
        onClick();
        clickHandler(testimonialsData);
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}
