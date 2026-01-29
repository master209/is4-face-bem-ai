import React, { FC } from 'react';

import { cnSideNav, ISideNavProps, INavItem, SideNavItem } from '.';

import './SideNavIs4.scss';
import './_current/SideNav-Item_current.scss';

export const SideNavIs4: FC<ISideNavProps> = ({
  navItems,
  vertical,
  activeNavItem,
  handleNavItemClick,
  handleNavLinkClick,
  className
}) => (
  <ul
    className={cnSideNav(null, [className])}
  >
    {navItems && navItems.map((navItem: INavItem) => (
      <SideNavItem
        key={navItem.id}
        navItem={navItem}
        activeNavItem={activeNavItem}
        handleNavItemClick={handleNavItemClick}
        handleNavLinkClick={handleNavLinkClick}
      />
    ))}
  </ul>
);
