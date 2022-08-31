import type { ReactElement } from 'react';
import './decoration-circles.scss';

export function DecorationCircles():ReactElement {
  return (
    <div className="decoration-circles d-none d-lg-block">
      <div className="decoration-circles__item" />
      <div className="decoration-circles__item" />
      <div className="decoration-circles__item" />
      <div className="decoration-circles__item" />
    </div>
  );
}
