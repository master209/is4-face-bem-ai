import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnPage, PageNav } from '..';

import './Page-Menu.scss';

export const PageMenu: FC<IClassNameProps> = () => (
  <div className={cnPage('Menu')}>
    <PageNav/>
  </div>
);
