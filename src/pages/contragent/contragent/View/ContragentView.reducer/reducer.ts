import { createContext } from 'react';
import { IContragentViewStateContext, Action, ActionType, State } from '..';

const initState: State = {
  loading: false,
  pageHeader: {
    id: {
      lab: 'ID',
      val: '',
    },
    isJur: {
      lab: 'Юридическое лицо?',
      val: '',
    },
    bookForm: {
      lab: 'Организационно-правовая форма',
      val: '',
    },
    name: {
      lab: 'Наименование контрагента',
      val: '',
    },
    dateRelevance: {
      lab: 'Дата начала актуальности',
      val: '',
    },
    dateRelevanceEnd: {
      lab: 'Дата окончания актуальности',
      val: '',
    },
  },
  // tabs: [],
  currentTime: '',
};

export const ContragentViewStateContext = createContext<IContragentViewStateContext>({
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
