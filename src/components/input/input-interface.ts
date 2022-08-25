/* eslint-disable max-len */
import type { InputHTMLAttributes, LegacyRef } from 'react';
import type { ISelectOption, TInputType } from '@globals/interface';

export interface IInputProperties extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  type?: TInputType;
  options?: ISelectOption[];
  desc?: string[];
  ref? : LegacyRef<HTMLInputElement> | undefined;
  classTitle?: string;
}
