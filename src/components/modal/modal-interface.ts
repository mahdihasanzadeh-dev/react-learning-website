/* eslint-disable @typescript-eslint/naming-convention */
export interface IModalProperties{
    show: boolean;
    modalClosed: ()=>void;
    children: React.ReactNode;
}
