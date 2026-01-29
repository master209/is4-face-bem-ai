import {FormErrors} from './common';

export type AuthData = {
  username: string;
  password: string;
  phone?: string;
  smsCode?: string;
};

export type UserData = {
  token: string;
  username: string;
  shortname: string;
};

export type LoginFormData = {
  token?: string;
  serverErrors?: FormErrors;
} & AuthData;

export type FetchUserData = LoginFormData | FormErrors;
