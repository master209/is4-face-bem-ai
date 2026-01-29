import React, { createContext, useContext, ReactNode } from 'react';

import { useGridPagination, GridPaginationState, UseGridPaginationOptions } from '../hooks/useGridPagination';

interface GridPaginationContextValue {
  state: GridPaginationState;
  goToPage: (pageNum: number | string) => void;
  changePerPage: (newPerPage: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
}

const GridPaginationContext = createContext<GridPaginationContextValue | null>(null);

interface GridPaginationProviderProps extends UseGridPaginationOptions {
  children: ReactNode;
}

export const GridPaginationProvider: React.FC<GridPaginationProviderProps> = ({
  children,
  rowsFiltered,
  perpageList,
  initialPerPage,
  maxPagesInRange
}) => {
  const pagination = useGridPagination({
    rowsFiltered,
    perpageList,
    initialPerPage,
    maxPagesInRange
  });

  const contextValue: GridPaginationContextValue = {
    state: pagination.state,
    goToPage: pagination.goToPage,
    changePerPage: pagination.changePerPage,
    nextPage: pagination.nextPage,
    prevPage: pagination.prevPage,
    firstPage: pagination.firstPage,
    lastPage: pagination.lastPage
  };

  return (
    <GridPaginationContext.Provider value={contextValue}>
      {children}
    </GridPaginationContext.Provider>
  );
};

export const useGridPaginationContext = () => {
  const context = useContext(GridPaginationContext);
  if (!context) {
    throw new Error('useGridPaginationContext must be used within GridPaginationProvider');
  }
  return context;
};