import React, { FC } from 'react';
import { classnames } from '@bem-react/classnames';

import { cnRow } from '../Row';
import {
  cnGrid,
  IGridProps,
  GridHeader,
  GridShown,
  GridReset,
  GridPerpage,
  GridTable,
  Pagination,
  GridDataProvider,
  GridFiltersProvider,
  GridPaginationProvider,
  GridSelectionProvider,
  useGridDataContext,
  useGridPaginationContext,
} from '.';

import './Grid.scss';
import '../Loading/Loading.scss';

// Внутренний компонент для новых контекстов
const GridContentNew: FC<IGridProps> = ({
  Header,
  noShown,
  noPerpage,
  noPagination,
  className,
  ...props
}) => {
  const { state: dataState } = useGridDataContext();
  const { state: paginationState } = useGridPaginationContext();

  const { loading, rowsFiltered } = dataState;
  const { perPage } = paginationState;

  const cnLoading = loading ? 'Loading' : '';
  const classHidden = rowsFiltered > +perPage ? '' : 'Hidden';

  return (
    <div
      {...props}
      className={cnGrid({loading}, [className, cnLoading])}
    >
      {Header && <GridHeader Header={Header}/>}
      <div className={cnRow(null, ['Shown-Reset'])}>
        {!noShown && <GridShown/>}
        {<GridReset/>}
      </div>
      <GridTable/>
      <div className={classnames(cnRow(null, ['Pagination-Perpage']), classHidden)}>
        {!noPagination && <Pagination/>}
        {!noPerpage && <GridPerpage/>}
      </div>
    </div>
  );
};


// Промежуточный компонент для связи данных с фильтрами
const GridFiltersConnector: FC<{ children: React.ReactNode; initialSort?: string }> = ({
  children,
  initialSort
}) => {
  const { state: dataState } = useGridDataContext();

  // Ждем, пока formName загрузится от сервера
  if (!dataState.formName) {
    return null; // Или можно показать загрузку
  }

  return (
    <GridFiltersProvider
      formName={dataState.formName}
      initialSort={initialSort}
    >
      {children}
    </GridFiltersProvider>
  );
};

// Промежуточный компонент для связи данных с пагинацией
const GridProvidersConnector: FC<IGridProps> = (gridProps) => {
  const { state: dataState } = useGridDataContext();

  return (
    <GridPaginationProvider
      rowsFiltered={dataState.rowsFiltered}
      perpageList={dataState.perpageList}
      initialPerPage={dataState.perPage}
    >
      <GridSelectionProvider onRowDblClick={dataState.onRowDblClick}>
        <GridContentNew {...gridProps} />
      </GridSelectionProvider>
    </GridPaginationProvider>
  );
};

// Компонент с новыми провайдерами
interface GridWithProvidersProps extends IGridProps {
  url: string;
  initialSort?: string;
}

const GridWithProviders: FC<GridWithProvidersProps> = ({
  url,
  initialSort = '-id',
  ...gridProps
}) => {
  return (
    <GridDataProvider url={url}>
      <GridFiltersConnector initialSort={initialSort}>
        <GridProvidersConnector {...gridProps} />
      </GridFiltersConnector>
    </GridDataProvider>
  );
};

// Основной компонент
export const Grid: FC<IGridProps & { url: string; initialSort?: string }> = (props) => {
  const { url, initialSort, ...gridProps } = props;

  return (
    <GridWithProviders
      url={url}
      initialSort={initialSort}
      {...gridProps}
    />
  );
};
