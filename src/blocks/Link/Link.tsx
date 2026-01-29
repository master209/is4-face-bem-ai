import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { ILinkProps } from '.';

import './Link.scss';

export const cnLink = cn('Link');

export const Link: FC<ILinkProps> = ({
  href,
  // target,
  children,
  handleClick,
  className,
  ...props
}) => (
  <NavLink
    to={href || '/'}
    className={cnLink(null, [className])}
    onClick={(ev) => handleClick && handleClick(ev)}
    {...props}
  >
    {children}
  </NavLink>
);
