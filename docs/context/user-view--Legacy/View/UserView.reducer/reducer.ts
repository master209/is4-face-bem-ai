import { createContext } from 'react';
import { IUserViewStateContext, Action, ActionType, State } from '..';

const initState: State = {
  loading: false,
  pageHeader: {
    username: {
      lab: 'Логин',
      val: '',
    },
    balance: {
      lab: 'Баланс',
      val: '',
    },
    userStatus: {
      lab: 'Статус юзера',
      val: '',
    },
    serviceStatus: {
      lab: 'Статус услуги',
      val: '',
    },
  },
  tabs: {
    'Юзер': {
      id: {lab: 'ID', val: '0'},
      userId: {lab: 'User ID', val: '0'},
    },
    'Услуга': {},
    'Радиус': {},
    'История списаний средств': {},
    'История пополнений средств': {},
    'История тарифов': {},
    'История сессий': {
      tableHead: {},
      tableRows: [],
    },
    'Расхождения в базах': [],
  },
  buttons: {
    'Юзер': {},
    'Услуга': {},
    'Радиус': {},
    'История сессий': {},
  },
  links: {
    'Юзер': {},
    'Услуга': {},
    'Радиус': {},
    'История списаний средств': {},
    'История пополнений средств': {},
    'История тарифов': {},
    'История сессий': {},
  },
  tabActive: 'Юзер',
  currentTime: '',
};

export const UserViewStateContext = createContext<IUserViewStateContext>({
  state: initState,
  dispatch: undefined
});

function userViewReducer(state: State, action: Action) {
  const {type, payload} = action;

  switch (type) {
    case ActionType.LOADING: {
      return { ...state, loading:true };
    }
    case ActionType.SWITCH_TAB: {
      return { ...state, tabActive:payload };
    }
    case ActionType.LOAD_DATA: {
      return {...state, ...payload, loading:false };
    }

    default:
      return state;
  }
}

export { userViewReducer, initState };
