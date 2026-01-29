import {useAppSelector} from '.';

import {
  getAuthorizationStatus,
  getIsCheckingAuth,
  getServerErrors,
  getUsername
} from '../store/user-process';

import {
  getActiveHeaderMenuId,
  getActivePageMenu,
} from '../store/main-process';


export const useAppSelectors = () => {
  const isCheckingAuth = useAppSelector(getIsCheckingAuth);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const username = useAppSelector(getUsername);
  const serverErrors = useAppSelector(getServerErrors);

  const activeHeaderMenuId = useAppSelector(getActiveHeaderMenuId);
  const activePageMenu = useAppSelector(getActivePageMenu);

  return {
    isCheckingAuth, authorizationStatus, username, serverErrors,
    activeHeaderMenuId, activePageMenu
  };
};
