import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { cnGrid, useGridDataContext, useGridPaginationContext } from '..';

import './Grid-Shown.scss';

// компонент - "Показаны записи _-_ из __ (отфильтрованных)"
export const GridShown: FC<IClassNameProps> = () => {
  const { state: dataState } = useGridDataContext();
  const { state: paginationState } = useGridPaginationContext();

  const { rowsFiltered, rowsPageCount } = dataState;
  const { page, perPage } = paginationState;

  const base = +perPage * (+page - 1);
  const itemFirst = base + 1;
  const itemLast = base + rowsPageCount;

  return (
    <div className={cnGrid('Shown')}>
      {`Показаны записи ${itemFirst}-${itemLast} из ${rowsFiltered}`}
    </div>
  );
};
