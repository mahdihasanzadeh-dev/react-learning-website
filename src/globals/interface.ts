/* eslint-disable @typescript-eslint/naming-convention */
import type { SetStateAction } from 'react';

export type ISetState<T> = (value: SetStateAction<T>) => void;
