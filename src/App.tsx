import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { configureRootTheme } from './lib/yandex-ui/Theme';
import { theme } from './lib/yandex-ui/Theme';
import { HelmetProvider } from 'react-helmet-async';

import { IRouteItem, IRouteController, IRouteAction } from './blocks/SideNavIs4';
import { PrivateRoute, ModuleLayout, ControllerLayout, LayoutEmpty } from './components';

import { NotFoundScreen } from './pages/not-found-screen';
import { LoginForm, HomeScreen } from './pages';

import { routsSideMenu } from './routs';
import { AppRoute } from './const';
import { getAction } from './helpers';

import UserView from './pages/admin/user/View/View';
import ContractView from './pages/contragent/contract/View/View';
import PaymentRaznos from './pages/main/payment/Raznos/Raznos';

// https://yastatic.net/s3/frontend/lego/storybook/index.html?path=/docs/surface-tooltip-desktop--playground
configureRootTheme({ theme });

const App: FC = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="" element={<HomeScreen/>}/>
        <Route path={'admin/user/view/:id'} element={<UserView/>}/>
        <Route path={'contragent/contract/view/:id'} element={<ContractView/>}/>
        <Route path={'main/payment/raznos/:id'} element={<PaymentRaznos/>}/>

        {routsSideMenu.map(({module, controllers}: IRouteItem) => (
          <Route
            key={module}
            path={module}
            element={<ModuleLayout moduleName={module}/>}
          >
            {controllers.map(({controller, actions}: IRouteController) => (
              <Route
                key={`${module}-${controller}`}
                path={controller}
                element={<ControllerLayout controllerName={controller}/>}
              >
                {actions.map(({action, param, page: Element}: IRouteAction) => (
                  <Route
                    key={`${module}-${controller}-${action}`}
                    path={getAction(action, param)}
                    element={
                      <PrivateRoute>
                        <Element/>
                      </PrivateRoute>
                    }
                  />
                ))}
              </Route>
            ))}
          </Route>
        ))}
        <Route path={AppRoute.Auth} element={
          <LayoutEmpty>
            <LoginForm/>
          </LayoutEmpty>
        }
        />
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </HelmetProvider>
  );
};

export default App;
