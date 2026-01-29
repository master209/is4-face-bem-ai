import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from '.';

type ModuleLayoutProps = {
  moduleName: string;
}

export const ModuleLayout = ({moduleName}: ModuleLayoutProps) => (
  <Layout>
    {/*<span>Модуль - {moduleName}</span>{' / '}*/}
    <Outlet/>
  </Layout>
);
