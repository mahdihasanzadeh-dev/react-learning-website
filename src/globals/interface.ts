/* eslint-disable @typescript-eslint/naming-convention */
import type { SetStateAction, HTMLInputTypeAttribute } from 'react';

export type ISetState<T> = (value: SetStateAction<T>) => void;

export interface ISelectOption {
    value: string | number;
    text: string;
}

export type TInputType = HTMLInputTypeAttribute | 'textarea' | 'select';
