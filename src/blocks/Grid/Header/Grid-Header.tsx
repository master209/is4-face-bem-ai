import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnGrid } from '..';

import './Grid-Header.scss';

export interface IGridHeaderProps extends IClassNameProps {
  Header: FC;
}

// компонент для заголовочной информации НАД таблицей
export const GridHeader: FC<IGridHeaderProps> = ({Header}) => (
  <div className={cnGrid('Header')}>
    <Header/>
  </div>
);
