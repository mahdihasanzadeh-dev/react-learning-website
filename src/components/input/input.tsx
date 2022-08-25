/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable react/jsx-props-no-spreading */
import type { ISelectOption } from '@globals/interface';
import type { ReactElement } from 'react';
import { useId } from 'react';

import type { IInputProperties } from './input-interface';
import './input.sass';

export function Input(properties: IInputProperties): ReactElement {
  const {
    id,
    type = 'text',
    ref,
    options,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...restProperties
  } = properties;

  const className: string = 'input';

  if (type === 'select') {
    return (
      <select className={className} id={id} {...restProperties}>
        {options?.map((option: ISelectOption): ReactElement => {
          const { value, text } = option;
          return (
            <option key={useId()} value={value} defaultValue={value === restProperties.value ? value : undefined}>
              {text}
            </option>
          );
        })}
      </select>
    );
  }

  if (type === 'radio') {
    return (
      <div>
        {options?.map((option: ISelectOption): ReactElement => {
          const { value } = option;
          const inputName = `radio-input${id ?? ''}`;
          return (
            <input
              key={useId()}
              type={type}
              id={id}
              defaultChecked={restProperties.value === value}
              value={value}
              name={inputName}
              onChange={restProperties.onChange}
            />
          );
        })}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <textarea className={className} id={id} {...restProperties} />
    );
  }

  return <input className={className} id={id} type={type} {...restProperties} ref={ref} />;
}
