import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State, AppDispatch } from '../types/common';
import { AuthData, UserData, LoginFormData, FetchUserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';

export const fetchCheckAuth = createAsyncThunk<{username: string; shortname: string}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'User/fetchCheckAuth',
  async (token, {dispatch, extra: api}) => {
    const {data: {username, shortname}} = await api.post<UserData>(APIRoute.CheckAuth, {token});
    return {username, shortname};
  },
);

export const fetchUsername = createAsyncThunk<FetchUserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'User/fetchUsername',
  async ({username, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<LoginFormData>(APIRoute.Auth, {username, password});
    if(data.token) {
      saveToken(data.token);
      return {...data, username};
    } else {
      dropToken();
      return {...data};
    }
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('User/fetchLogout', () => dropToken());
