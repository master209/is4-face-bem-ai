import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IClassNameProps } from '@bem-react/core';

import { cnHeader } from '..';
import { Nav } from '../../../blocks/Nav';
import { IHandleClick } from '../../../blocks/Nav';

import { setActiveHeaderMenuId } from '../../../store/main-process';

import { routsHeaderMenu } from '../../../routs';
import { useAppDispatch, useAppSelectors } from '../../../hooks';

import './Header-Nav.scss';

export const HeaderNav: FC<IClassNameProps> = ({...props}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { activeHeaderMenuId } = useAppSelectors();

  const urlPath = location.pathname.split('/');

  // location.pathname - свой или нет?
  const isHeaderPath = () =>
    routsHeaderMenu.find((menuItem) => menuItem.to === urlPath[1]);

  const setActiveNavItemId = ({navItemId}: IHandleClick) =>
    dispatch(setActiveHeaderMenuId({navItemId}));

  // при смене location.pathname - если свой - устанавливаем в его Стор
  useEffect(() => {
    if(isHeaderPath()) {
      setActiveNavItemId({navItemId: urlPath[1]});
    }
  }, [urlPath]);

  return (
    <div className={cnHeader('Nav')}>
      <Nav
        navItems={routsHeaderMenu}
        activeItemId={activeHeaderMenuId}
        handleClick={setActiveNavItemId}
        {...props}
      />
    </div>
  );
};
