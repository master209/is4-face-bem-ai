import React, { createContext, useContext, ReactNode } from 'react';

import { useGridFilters, GridFiltersState, UseGridFiltersOptions } from '../hooks/useGridFilters';

interface GridFiltersContextValue {
  state: GridFiltersState;
  updateSort: (column: string) => void;
  updateFilter: (field: string, value: string) => void;
  resetFilters: () => void;
  getFilterValue: (field: string) => string;
}

const GridFiltersContext = createContext<GridFiltersContextValue | null>(null);

interface GridFiltersProviderProps extends UseGridFiltersOptions {
  children: ReactNode;
}

export const GridFiltersProvider: React.FC<GridFiltersProviderProps> = ({
  children,
  formName,
  tableFilter,
  initialSort
}) => {
  const filters = useGridFilters({ formName, tableFilter, initialSort });

  const contextValue: GridFiltersContextValue = {
    state: filters.state,
    updateSort: filters.updateSort,
    updateFilter: filters.updateFilter,
    resetFilters: filters.resetFilters,
    getFilterValue: filters.getFilterValue
  };

  return (
    <GridFiltersContext.Provider value={contextValue}>
      {children}
    </GridFiltersContext.Provider>
  );
};

export const useGridFiltersContext = () => {
  const context = useContext(GridFiltersContext);
  if (!context) {
    throw new Error('useGridFiltersContext must be used within GridFiltersProvider');
  }
  return context;
};