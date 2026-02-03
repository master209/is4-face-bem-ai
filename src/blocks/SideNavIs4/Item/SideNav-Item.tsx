import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import {
  cnSideNav,
  IHandleClick,
  INavItem,
  SideNavContent,
  SideNavLink,
  SideNavTitle
} from '..';

import './SideNav-Item.scss';

export interface ISideNavItemProps extends IClassNameProps {
  navItem: INavItem;
  activeNavItem: {id:string; link: string;};
  handleNavItemClick: (navItemId: string) => void;
  handleNavLinkClick: ({ev, navLinkId}: IHandleClick) => void;
}

export const SideNavItem: FC<ISideNavItemProps> = ({
  navItem: {id: navItemId, title, links},
  activeNavItem,
  handleNavItemClick,
  handleNavLinkClick,
}) => {
  return (
    <li
        key={navItemId}
        className={cnSideNav('Item', {current: navItemId === activeNavItem.id})}
      >
        <SideNavTitle
          className={cnSideNav('Title')}
          handleNavItemClick={() => handleNavItemClick(navItemId)}
        >
          {
            navItemId === activeNavItem.id ? title :
              <SideNavLink
                href={`/${navItemId}`}
                active={false}
                handleClick={() => true}
              >
                {title}
              </SideNavLink>
          }
        </SideNavTitle>
        <SideNavContent
          className={cnSideNav('Content')}
          visible={navItemId === activeNavItem.id}
        >
          {links.map(({to, text}) => (
            <SideNavLink
              key={`${navItemId}-${to}`}
              href={to}
              active={to === activeNavItem.link}
              handleClick={(ev) => handleNavLinkClick({ev, navLinkId: to})}
            >
              {text}
            </SideNavLink>
          ))}
        </SideNavContent>
      </li>
  );
};
