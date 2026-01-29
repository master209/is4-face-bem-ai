import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import {INavProps, NavItem} from '.';

import './Nav.scss';

export const cnNav = cn('Nav');

export const Nav: FC<INavProps> = ({
  navItems,
  vertical,
  activeItemId,
  handleClick,
  className
}) => (
  <ul
    className={cnNav(null, [className])}
  >
    {navItems && navItems.map((item) => (
      <NavItem
        key={item.text}
        link={item}
        activeItemId={activeItemId}
        handleClick={(ev) => handleClick({ev, navItemId: item.to})}
      />
    ))}
  </ul>
);
