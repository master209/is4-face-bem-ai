import { createContext } from 'react';
import { IContractViewStateContext, Action, ActionType, State } from '..';

const initState: State = {
  loading: false,
  pageHeader: {
    id: {
      lab: 'ID',
      val: '',
    },
    name: {
      lab: 'Название клиента',
      val: '',
    },
    numberContract: {
      lab: 'Номер договора',
      val: '',
    },
    conclusionDate: {
      lab: 'Дата заключения договора',
      val: '',
    },
    email: {
      lab: 'Электронная почта',
      val: '',
    },
  },
  // tabs: [],
  currentTime: '',
};

export const ContractViewStateContext = createContext<IContractViewStateContext>({
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
