import { Dispatch } from 'react';
import { Action, ActionType, State } from '..';
import { RequestProps } from '../../../../../blocks/Grid';

export const dispatchLoading = (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.LOADING,
    payload: true
  });
};

export const dispatchSwitchTab = (dispatch: Dispatch<Action>, tab:string) => {
  dispatch({
    type: ActionType.SWITCH_TAB,
    payload: tab
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
