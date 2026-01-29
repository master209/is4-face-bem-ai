import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';
import { ToastContainer } from 'react-toastify';

import { useIsAuthorized, useAppSelectors } from '../../hooks';
import { AppRoute} from '../../const';

import { Header } from '..';
import {
  cnPage,
  PageHead,
  PageMain,
  PageMenu,
} from '.';

import './Page.scss';
import 'react-toastify/dist/ReactToastify.css';

export interface IPageProps extends IClassNameProps {
  children: ReactNode;
}

export const Page: FC<IPageProps> = ({children}) => {
  const location = useLocation();
  const isAuthorized = useIsAuthorized();
  const {isCheckingAuth} = useAppSelectors();

  if (location.pathname !== AppRoute.Auth
    && !isCheckingAuth
    && !isAuthorized
  ) {
    return <Navigate to={AppRoute.Auth} />;
  }

  return (
    <div className="App">
      {!isCheckingAuth ? (
        <>
          <Header/>
          <div className={cnPage()}>
            <PageHead/>
            <PageMenu/>
            <PageMain>{children}</PageMain>
          </div>

          {/* https://fkhadra.github.io/react-toastify/introduction/ */}
          <ToastContainer
            position="bottom-center"
            autoClose={10000}
            newestOnTop={false}
            rtl={false}
            hideProgressBar
            // closeOnClick
            // draggable
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
          />
        </>
      ) : <p>проверяю разрешения...</p>}
    </div>
  );
};
