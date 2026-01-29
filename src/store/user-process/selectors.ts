import { State, FormErrors } from '../../types/common';
import { AuthorizationStatus, NameSpace } from '../../const';

export const getIsCheckingAuth = (state: State): boolean => state[NameSpace.User].isCheckingAuth;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUsername = (state: State): string => state[NameSpace.User].username;
export const getServerErrors = (state: State): FormErrors => state[NameSpace.User].serverErrors;
