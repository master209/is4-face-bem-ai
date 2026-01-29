import React, { createContext, useContext, ReactNode } from 'react';

import { useGridData, GridDataState, UseGridDataOptions } from '../hooks/useGridData';

interface GridDataContextValue {
  state: GridDataState;
  loadData: () => void;
  updateParams: (updates: Partial<GridDataState>) => void;
}

const GridDataContext = createContext<GridDataContextValue | null>(null);

interface GridDataProviderProps {
  children: ReactNode;
  url: string;
  initialData?: Partial<GridDataState>;
}

export const GridDataProvider: React.FC<GridDataProviderProps> = ({
  children,
  url,
  initialData
}) => {
  const gridData = useGridData({ url, initialData });

  const contextValue: GridDataContextValue = {
    state: gridData.state,
    loadData: gridData.loadData,
    updateParams: gridData.updateParams
  };

  return (
    <GridDataContext.Provider value={contextValue}>
      {children}
    </GridDataContext.Provider>
  );
};

export const useGridDataContext = () => {
  const context = useContext(GridDataContext);
  if (!context) {
    throw new Error('useGridDataContext must be used within GridDataProvider');
  }
  return context;
};