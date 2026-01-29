import React, { FC, ReactNode, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnSideNav } from '../../SideNavIs4';

import './SideNav-Title.scss';

export interface ISideNavTitleProps extends IClassNameProps {
  children: ReactNode;
  handleNavItemClick: (ev: MouseEvent) => void;
}

export const SideNavTitle: FC<ISideNavTitleProps> = ({children, handleNavItemClick}) => (
  <div
    className={cnSideNav('Title')}
    onClick={handleNavItemClick}
  >
    {children}
  </div>
);
