import type { ReactElement } from 'react';
import type { IFactItemProperties } from './facts-item-interface';
import './facts-item.scss';

function FactsItem({ fact, title, id }:IFactItemProperties):ReactElement {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="facts__item">
        <h2 className={`facts__item--${id}`}>{fact}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default FactsItem;
