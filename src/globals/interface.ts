/* eslint-disable @typescript-eslint/naming-convention */
import type { SetStateAction } from 'react';

export type ISetState<T> = (value: SetStateAction<T>) => void;

export interface ISelectOption {
    value: string | number;
    text: string;
}
