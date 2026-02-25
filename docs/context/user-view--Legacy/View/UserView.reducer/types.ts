import { Reducer, ReducerState, Dispatch } from 'react';

type Item = {
  lab: string;
  val: string;
}

export type Btn = {
  lab: string;
  handlerUrl: string; // Адрес обработчика для кнопки
}

export type Lnk = {
  lab: string;
  linkUrl: string;
}

export type State = {
  loading: boolean;
  pageHeader: {
    username: Item;
    balance: Item;
    userStatus: Item;
    serviceStatus: Item;
  };
  tabs: {
    'Юзер': {
      id: Item;
      userId: Item;
      [key: string]: Item;
    },
    'Услуга': {[key: string]: Item;},
    'Радиус': {[key: string]: Item;},
    'История пополнений средств': {[key: string]: Item;},
    'История списаний средств': {[key: string]: Item;},
    'История тарифов': {[key: string]: Item;},
    'История сессий': {
      tableHead: object;
      tableRows: TableRow[];
    },
    'Расхождения в базах': {
      [key: string]: { lab: string; is: string; lk: string; },
    }[]
  },
  buttons: {
    'Юзер': {[key: string]: Btn;},
    'Услуга': {[key: string]: Btn;},
    'Радиус': {[key: string]: Btn;},
    'История сессий': {[key: string]: Btn;},
  };
  links: {
    'Юзер': {[key: string]: Lnk;},
    'Услуга': {[key: string]: Lnk;},
    'Радиус': {[key: string]: Lnk;},
    'История пополнений средств': {[key: string]: Lnk;},
    'История списаний средств': {[key: string]: Lnk;},
    'История тарифов': {[key: string]: Lnk;},
    'История сессий': {[key: string]: Lnk;},
  };
  tabActive: string;
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

export interface IUserViewStateContext {
  state: ReducerState<Reducer<State, Action>>;
  dispatch: Dispatch<Action> | undefined;
}

export type TableRow = {
  id: string;
  [key: string]: string;
}
