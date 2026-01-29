import React, { FC, ReactNode, Suspense } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnPage } from '..';
import { Content } from '../../../blocks/Content';

import './Page-Main.scss';

export interface IPageMainProps extends IClassNameProps {
  children: ReactNode;
}

export const PageMain: FC<IPageMainProps> = ({children}) => (
  <div className={cnPage('Main')}>
    <Suspense fallback="загружаю страницу...">
      <Content>
        {children}
      </Content>
    </Suspense>
  </div>
);
