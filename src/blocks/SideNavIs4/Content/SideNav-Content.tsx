import React, { FC, ReactNode } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnSideNav } from '..';

import './SideNav-Content.scss';
import './_visible/SideNav-Content_visible.scss';

export interface ISideNavContentProps extends IClassNameProps {
  children: ReactNode;
  visible?: boolean; // модификатор SideNav-Content_visible
}

export const SideNavContent: FC<ISideNavContentProps> = ({children, visible}) => (
  <div className={cnSideNav('Content', {visible})}>
    {children}
  </div>
);
