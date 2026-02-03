import React, { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnSideNav } from '..';
import { Link } from '../../Link';

import './SideNav-Link.scss';
import './_active/SideNav-Link_active.scss';

export interface ISideNavLinkProps extends IClassNameProps {
  children: string;
  href: string;
  active: boolean;
  handleClick?: (ev: MouseEvent) => void;
}

export const SideNavLink: FC<ISideNavLinkProps> = ({
  children,
  href,
  active,
  handleClick
}) => {
  return (
    <Link
      href={href}
      className={cnSideNav('Link', {active})}
      handleClick={(ev: MouseEvent) => handleClick?.(ev)}
    >
      {children}
    </Link>
  );
};
