import { Reducer, ReducerState, Dispatch } from 'react';

export type State = {
  loading: boolean;
  isApproval: boolean;
  isChartAccountReset: boolean;
  tableHeader: {
    contragent: {
      lab: string;
      val: string;
    };
    amount: {
      lab: string;
      val: string;
    };
  };
  tableHead: object;
  tableRows: TableRow[];
  selectedContragent: string | null;
}

// Все возможные варианты действий со стейтом
export enum ActionType {
  LOADING = 'LOADING',
  SET_IS_APPROVAL = 'SET_IS_APPROVAL',
  SET_IS_CHARTACCOUNT_RESET= 'SET_IS_CHARTACCOUNT_RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_TABLE_ROWS = 'LOAD_TABLE_ROWS',
  SET_SELECTED_CONTRAGENT = 'SET_SELECTED_CONTRAGENT',
}

type ActionBooleanPayload = {
  type: ActionType.LOADING | ActionType.SET_IS_APPROVAL | ActionType.SET_IS_CHARTACCOUNT_RESET;
  payload: boolean;
}

type ActionStringPayload = {
  type: ActionType.SET_SELECTED_CONTRAGENT;
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

export interface IRaznosStateContext {
  state: ReducerState<Reducer<State, Action>>;
  dispatch: Dispatch<Action> | undefined;
}

export type Status = {
  class: string;
  name: string;
}

export type TableRow = {
  id: string;
  amount: string;
  [key: string]: string;
}

export type objArr = {
  [key: string]: string | number;
}

