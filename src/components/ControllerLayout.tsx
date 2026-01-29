import React from 'react';
import { Outlet } from 'react-router-dom';

type ControllerLayoutProps = {
  controllerName: string;
}

export const ControllerLayout = ({controllerName}: ControllerLayoutProps) => (
  <>
    {/*<span>Контроллер - {controllerName}</span>*/}
    <Outlet/>
  </>
);
