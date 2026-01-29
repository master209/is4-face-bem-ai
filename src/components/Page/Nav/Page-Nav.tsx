import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IClassNameProps } from '@bem-react/core';

import { SideNavIs4 } from '../../../blocks/SideNavIs4';
import { IHandleClick, INavItem } from '../../../blocks/SideNavIs4';
import { cnPage } from '..';

import { setActivePageMenuId, setActivePageMenuLink } from '../../../store/main-process';

import { navSideMenu } from '../../../navs';
import { ROUTE_MENU_POSITION, ROUTE_SUBMENU_POSITION } from '../../../const';
import { useAppDispatch, useAppSelectors } from '../../../hooks';

import './Page-Nav.scss';

export const PageNav: FC<IClassNameProps> = ({...props}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { activePageMenu } = useAppSelectors();

  const urlPath = location.pathname.split('/');

  // location.pathname - свой или нет?
  const isPagePath = () =>
    navSideMenu.find(({id}: INavItem) => id === urlPath[ROUTE_MENU_POSITION]);

  // по клику на пункте меню navItemId - устанавливаем его в Стор
  const setActiveNavItemId = (navItemId: string) =>
    dispatch(setActivePageMenuId({navItemId}));

  // по клику на пункте ПОДменю navLinkId - устанавливаем его в Стор
  const setActiveNavLinkId = ({navLinkId}: IHandleClick) =>
    dispatch(setActivePageMenuLink({navLinkId}));

  // при смене location.pathname
  useEffect(() => {
    if(isPagePath()) { // если location.pathname свой - устанавливаем в его Стор
      setActiveNavItemId(urlPath[ROUTE_MENU_POSITION]); // пункт меню
      // urlPath[ROUTE_SUBMENU_POSITION] && setActiveNavLinkId({navLinkId: urlPath[ROUTE_SUBMENU_POSITION]}); // пункт подменю
      urlPath[ROUTE_SUBMENU_POSITION] && setActiveNavLinkId({navLinkId: location.pathname}); // пункт подменю

      // eslint-disable-next-line no-console
      // console.log('location.pathname, urlPath, urlPath.length: ', location.pathname, urlPath, urlPath.length);
    }
  }, [urlPath]);

  return (
    <SideNavIs4
      className={cnPage('SideNav')}
      navItems={navSideMenu}
      activeNavItem={
        {id: activePageMenu.id,link: activePageMenu.link}
      }
      handleNavItemClick={setActiveNavItemId}
      handleNavLinkClick={setActiveNavLinkId}
      {...props}
    />
  );
};
