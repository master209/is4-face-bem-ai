import { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export const cnSideNav = cn('SideNav');

export type IRouteAction = {
  action: string;
  page: FC;
  param?: string;
};

export type IRouteController = {
  controller: string;
  actions: IRouteAction[];
};

export type IRouteItem = {
  module: string;
  controllers: IRouteController[];
}

export type INavItemLink = {
  to: string;
  text: string;
};

export type INavItem = {
  id: string;
  title: string;
  links: INavItemLink[];
}

export interface IHandleClick {
  ev?: MouseEvent;
  navLinkId: string; //кликнутая ссылка в навигации
}

export interface ISideNavProps extends IClassNameProps {
  navItems: INavItem[];
  activeNavItem: {
    id:string;
    link: string;
  };
  handleNavItemClick: (navItemId: string) => void;
  handleNavLinkClick: ({ev, navLinkId}: IHandleClick) => void;
  vertical?: boolean;
}

export { SideNavIs4 } from './SideNavIs4';
export { SideNavItem } from './Item/SideNav-Item';
export { SideNavTitle } from './Title/SideNav-Title';
export { SideNavContent } from './Content/SideNav-Content';
export { SideNavLink } from './Link/SideNav-Link';
