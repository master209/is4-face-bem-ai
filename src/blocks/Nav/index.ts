import { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

export type ILink = {
  to: string;
  text: string;
  page?: FC;
}

export interface IHandleClick {
  ev?: MouseEvent;
  navItemId: string; //кликнутая ссылка в навигации
}

export interface INavProps extends IClassNameProps {
  navItems?: ILink[];
  activeItemId: string;
  handleClick: ({ev, navItemId}: IHandleClick) => void;
  vertical?: boolean;
}

export { cnNav, Nav } from './Nav';
export { NavItem } from './Item/Nav-Item';
export { NavLink } from './Item/Link/Nav-Link';
export { withNavVertical } from './_vertical/Nav_vertical';
