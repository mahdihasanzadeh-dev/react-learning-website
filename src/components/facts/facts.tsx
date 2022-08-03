import type { ReactElement } from 'react';
import facts from '@data/facts.json';
import { FactsItem } from '@components/facts-item/facts-item';
import type { IFactItemProperties } from '@components/facts-item/facts-item-interface';
import './facts.scss';

export function Facts():ReactElement {
  return (
    <div className="facts-section pb-5">
      <div className="container">
        <div className="box py-2">
          <div className="row text-center">
            {
                facts.map((item) => {
                  const { fact, title, id }: IFactItemProperties = item;
                  return (
                    <FactsItem
                      key={id}
                      id={id}
                      fact={fact}
                      title={title}
                    />
                  );
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
