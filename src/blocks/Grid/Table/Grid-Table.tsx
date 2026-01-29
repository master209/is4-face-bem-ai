import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IClassNameProps } from '@bem-react/core';

import { GridHead, GridFilter, GridRow, GridSummary } from '.';
import { cnGrid, useGridDataContext } from '..';

import './Grid-Table.scss';

export interface IGridTableProps extends IClassNameProps {
  noFiltering?: boolean;
  noSorting?: boolean;
  noSummary?: boolean; // Итоговая сводка под таблицей
}

// компонент самой таблицы
export const GridTable: FC<IGridTableProps> = ({ noFiltering, noSorting, noSummary }) => {
  const { state: dataState } = useGridDataContext();

  return (
    <table className={cnGrid('Table')}>
      <thead>
        <GridHead/>
      </thead>
      <tbody>
        {!noFiltering && <GridFilter/>}
        {dataState.tableRows.map((row) => <GridRow key={row.id} row={row}/>)}
      </tbody>
      <tfoot>
        {!noSummary && <GridSummary/>}
      </tfoot>
    </table>
  );
};
