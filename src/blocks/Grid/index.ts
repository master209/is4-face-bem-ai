import { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface IGridProps extends IClassNameProps {
  Header?: FC; // Заголовочная инфа над таблицей
  noShown?: boolean; // Показаны записи ..-.. из ...
  noPerpage?: boolean; // Выводить строк на странице
  noPagination?: boolean;
}

export const cnGrid = cn('Grid');

export { Grid } from './Grid';
export * from './hooks';
export * from './contexts';
export * from './helpers';
export * from './types';

// Константы
export const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';
export const SORT_DEFAULT = '-id';
export const PER_PAGE_INIT = '20';  // на клиенте это только для ИНИТ! Это значиние следует задавать в конфиге на API !
export const PER_PAGE_LIST_INIT = ['10', '15', '20', '25'];  // на клиенте это только для ИНИТ! Это значиние следует задавать в конфиге на API !
export { GridHeader } from './Header/Grid-Header';
export { GridShown } from './Shown/Grid-Shown';
export { GridReset } from './Reset/Grid-Reset';
export { GridPerpage } from './Perpage/Grid-Perpage';
export { GridPerpageItem } from './Perpage/Item/Grid-PerpageItem';
export { GridTable, GridRow, GridSummary } from './Table';
export { Pagination } from './Pagination';

export * from '../../helpers';
