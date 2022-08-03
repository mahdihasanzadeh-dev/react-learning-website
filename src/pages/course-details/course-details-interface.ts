export interface ILocationState {
    title : string;
}

export interface ILocationParams {
  pathname: string;
  state: ILocationState;
  search: string;
  hash: string;
  key: string;
}
