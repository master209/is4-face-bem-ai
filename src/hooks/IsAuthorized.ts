import {useAppSelectors} from './AppSelectors';
import {AuthorizationStatus} from '../const';
import {getToken} from '../services/token';

export const useIsAuthorized = () => {
  const {authorizationStatus} = useAppSelectors();

  return !!(getToken() && authorizationStatus === AuthorizationStatus.Auth);
};
