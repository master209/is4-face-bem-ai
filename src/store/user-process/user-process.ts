import { createSlice } from '@reduxjs/toolkit';

import { fetchCheckAuth, fetchUsername, fetchLogout } from '../api-actions';
import { FormErrors } from '../../types/common';
import { LoginFormData } from '../../types/user-data';
import { NameSpace, AuthorizationStatus } from '../../const';

const {Auth, NoAuth, Unknown} = AuthorizationStatus;

export type UserProcess = {
  isCheckingAuth: boolean; // этот флаг установлен в true пока от сервера не получен ответ, есть ли у юзера доступ к странице
  authorizationStatus: AuthorizationStatus;
  username: string;
  shortname: string;
  serverErrors: FormErrors;
};

const initialState: UserProcess = {
  isCheckingAuth: true, // изначально для юзера закрыт доступ к странице т.к ответ от сервера еще не получен
  authorizationStatus: Unknown,
  username: '',
  shortname: '',
  serverErrors: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.pending, (state) => ( // ожидание ответа от сервера есть ли у юзера доступ к странице
        { ...state, isCheckingAuth:true } // пока для юзера закрыт доступ к странице т.к ответ от сервера еще не получен
      ))
      .addCase(fetchCheckAuth.fulfilled, (state, {payload: {username, shortname}}) => { // получен ответ от сервера
        state.isCheckingAuth = false; // для юзера получен ответ от сервера о досупности страницы
        state.authorizationStatus = username ? Auth : NoAuth;
        state.username = username;
        state.shortname = shortname;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.isCheckingAuth = false;
        state.authorizationStatus = NoAuth;
        state.username = '';
        state.shortname = '';
      })
      .addCase(fetchUsername.fulfilled, (state, {payload}) => {
        const _state = {...state, ...payload};
        const {username} = payload as LoginFormData;

        if(!payload?.serverErrors) {
          _state.authorizationStatus = Auth;
          _state.username = username;
        }
        return {...state, ..._state};
      })
      .addCase(fetchUsername.rejected, (state) => {
        state.isCheckingAuth = false;
        state.authorizationStatus = NoAuth;
        state.username = '';
        state.shortname = '';
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.isCheckingAuth = false;
        state.authorizationStatus = NoAuth;
        state.username = '';
        state.shortname = '';
      });
  }
});
