import { Reducer, ReducerState, Dispatch } from 'react';
// import { IDataConfig } from '../Data';

type Item = {
  lab: string;
  val: string | number;
}

export type State = {
  loading: boolean;
  pageHeader: {
    id: Item;
  };
  // tabs: IDataConfig[];
  currentTime: string;
}

// Все возможные варианты действий со стейтом
export enum ActionType {
  LOADING = 'LOADING',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_TABLE_ROWS = 'LOAD_TABLE_ROWS',
  SWITCH_TAB = 'SWITCH_TAB',
}

type ActionBooleanPayload = {
  type: ActionType.LOADING;
  payload: boolean;
}

type ActionStringPayload = {
  type: ActionType.SWITCH_TAB;
  payload: string;
}

type ActionDataPayload = {
  type: ActionType.LOAD_DATA;
  payload: State;
}

type ActionRowsPayload = {
  type: ActionType.LOAD_TABLE_ROWS;
  payload: TableRow[];
}

export type Action =
  ActionBooleanPayload |
  ActionStringPayload |
  ActionDataPayload |
  ActionRowsPayload

export interface ILetterViewStateContext {
  state: ReducerState<Reducer<State, Action>>;
  dispatch: Dispatch<Action> | undefined;
}

export type TableRow = {
  id?: string;
  [key: string]: string | number | null | undefined;
}
