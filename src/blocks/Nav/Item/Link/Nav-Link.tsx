import React, { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnNav } from '../..';
import { Link } from '../../../Link';

export interface INavLinkProps extends IClassNameProps {
  children: string;
  href: string;
  handleClick: (ev: MouseEvent) => void;
}

export const NavLink: FC<INavLinkProps> = ({
  children,
  href,
  handleClick
}) => (
  <Link
    href={href}
    className={cnNav('Link')}
    handleClick={(ev: MouseEvent) => handleClick(ev)}
  >
    {children}
  </Link>
);
