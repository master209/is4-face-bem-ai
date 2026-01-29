import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { cnGrid, useGridDataContext, useGridFiltersContext } from '../..';
import { HeadItem } from './Item/Head-Item';

import './Grid-Head.scss';

export const cnHead = cn('Head');

// компонент - заголовок таблицы
export const GridHead: FC<IClassNameProps> = () => {
  const { state: dataState } = useGridDataContext();
  const { state: filtersState } = useGridFiltersContext();

  return (
    <tr className={cnGrid('Head')}>
      {dataState.tableHead && Object.entries(dataState.tableHead).map(([key, {lab, notSortable, hidden}]) => (
        <HeadItem
          key={key}
          id={key}
          val={lab}
          currSort={filtersState.sort}
          notSortable={notSortable}
          hidden={hidden}
        />
      ))}
    </tr>
  );
};
