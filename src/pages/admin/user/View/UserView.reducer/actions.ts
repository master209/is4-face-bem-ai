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
  console.log('🔄 dispatchLoadData called with req:', req);
  console.log('🌐 Full API URL:', `${api.defaults.baseURL}${req}`);

  dispatchLoading(dispatch);

  api.get(req)
    .then((res) => {
      console.log('✅ API response received:', res);
      return res.data as State;
    })
    .then((data) => {
      console.log('📦 Dispatching LOAD_DATA with data:', data);
      dispatch({
        type: ActionType.LOAD_DATA,
        payload: {...data}
      });
    })
    .catch((error) => {
      console.log('❌ dispatchLoadData - server sent ERROR: ', error);
      console.log('🔍 Error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });

      // При ошибке API делаем редирект обратно
      console.log('🔄 Redirecting to manage due to API error');
      window.location.href = '/admin/users/manage';
    });
};
