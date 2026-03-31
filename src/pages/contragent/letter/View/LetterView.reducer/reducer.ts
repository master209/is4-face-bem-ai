import { createContext } from 'react';
import { ILetterViewStateContext, Action, ActionType, State } from '..';

const initState: State = {
  loading: false,
  pageHeader: {
    id: {
      lab: 'ID',
      val: '',
    },
  },
  // tabs: [],
  currentTime: '',
};

export const LetterViewStateContext = createContext<ILetterViewStateContext>({
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
