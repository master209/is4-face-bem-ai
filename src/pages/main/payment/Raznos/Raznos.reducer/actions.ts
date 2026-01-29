import { Dispatch } from 'react';
import { Action, ActionType, TableRow, State } from '..';
import { RequestProps } from '../../../../../blocks/Grid';

export const dispatchLoading = (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.LOADING,
    payload: true
  });
};

export const dispatchIsApproval = (dispatch: Dispatch<Action>, isApproval: boolean) => {
  dispatch({
    type: ActionType.SET_IS_APPROVAL,
    payload: isApproval
  });
};

export const dispatchIsChartAccountReset = (dispatch: Dispatch<Action>, isChartAccountReset: boolean) => {
  dispatch({
    type: ActionType.SET_IS_CHARTACCOUNT_RESET,
    payload: isChartAccountReset
  });
};

export const dispatchSetSelectedContragent = (dispatch: Dispatch<Action>, selectedContragent: string) => {
  dispatch({
    type: ActionType.SET_SELECTED_CONTRAGENT,
    payload: selectedContragent
  });
};

export const dispatchLoadData = (dispatch: Dispatch<Action>, {api, req}: RequestProps) => {
  dispatchLoading(dispatch);

  api.get(req)
    .then((res) => res.data as State)
    .then((data) => dispatch({
      type: ActionType.LOAD_DATA,
      payload: {...data}
    }))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('!dispatchLoadData - server sent ERROR: ', error);
    });
};

export const dispatchLoadTableRows = (dispatch: Dispatch<Action>, {api, req}: RequestProps) => {
  dispatchLoading(dispatch);

  api.get(req)
    .then((res) => res.data as TableRow[])
    .then((data) => dispatch({
      type: ActionType.LOAD_TABLE_ROWS,
      payload: {...data}
    }))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('!dispatchLoadTableRows - server sent ERROR: ', error);
    });
};

