import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { PageMain } from './Page';
import { useIsAuthorized, useAppSelectors } from '../hooks';
import { AppRoute} from '../const';

import './Page/Page.scss';

export interface IPageProps extends IClassNameProps {
  children: ReactNode;
}

export const LayoutEmpty: FC<IPageProps> = ({children}) => {
  const location = useLocation();
  const isAuthorized = useIsAuthorized();
  const {isCheckingAuth} = useAppSelectors();

  if (location.pathname === AppRoute.Auth
    && !isCheckingAuth
    && isAuthorized
  ) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="App">
      {!isCheckingAuth
        ? <PageMain>{children}</PageMain>
        : <p>проверяю разрешения...</p>}
    </div>
  );
};
