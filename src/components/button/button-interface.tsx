/* eslint-disable @typescript-eslint/naming-convention */
export enum ButtonSize {
    small = 'small',
    medium = 'medium',
    large = 'large'
}

export enum ButtonTypes {
    outline = 'outline',
    filled = 'filled',
    text = 'text'
}

export enum ButtonVariant {
    oval = 'oval',
    rectangular = 'rectangular'
}

export interface IButtonProperties {
    text : string;
    isDisabled?: boolean;
    type?: ButtonTypes;
    variant? : ButtonVariant;
    size? : ButtonSize;
    backgroundColor?: string;
    textColor?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    shadow?: boolean;
}
