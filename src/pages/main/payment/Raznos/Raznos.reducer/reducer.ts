import { createContext } from 'react';
import { IRaznosStateContext, Action, ActionType, State } from '..';

const initState: State = {
  loading: false,
  isApproval: false,
  isChartAccountReset: false,
  tableHeader: {
    contragent: {
      lab: '',
      val: '0',
    },
    amount: {
      lab: 'Сумма платежа',
      val: '0',
    }},
  tableHead: {},
  tableRows: [],
  selectedContragent: null,
};

export const RaznosStateContext = createContext<IRaznosStateContext>({
  state: initState,
  dispatch: undefined
});

function raznosReducer(state: State, action: Action) {
  const {type, payload} = action;

  switch (type) {
    case ActionType.LOADING: {
      return { ...state, loading:true };
    }

    case ActionType.LOAD_DATA: {
      return {...state, ...payload, loading:false };
    }

    case ActionType.LOAD_TABLE_ROWS: {
      return {...state, tableRows:payload, loading:false };
    }

    case ActionType.SET_SELECTED_CONTRAGENT: {
      return { ...state, selectedContragent:payload };
    }

    case ActionType.SET_IS_APPROVAL: {
      return { ...state, isApproval:payload };
    }

    // в поле "План счетов" выбрали "Прочие (76)" ?
    case ActionType.SET_IS_CHARTACCOUNT_RESET: {
      return {
        ...state,
        isChartAccountReset: payload,
        // tableRows: payload ? [] : state.tableRows // обнуление договоров по ресету
      };
    }

    default:
      return state;
  }
}

export { raznosReducer, initState };
