import React, { createContext, useContext, ReactNode } from 'react';

import { useGridSelection, GridSelectionState, UseGridSelectionOptions } from '../hooks/useGridSelection';
import { IGridRow } from '../types';

interface GridSelectionContextValue {
  state: GridSelectionState;
  selectRow: (rowId: string | undefined) => void;
  toggleRow: (rowId: string) => void;
  doubleClickRow: (row: IGridRow) => void;
  isRowSelected: (rowId: string) => boolean;
}

const GridSelectionContext = createContext<GridSelectionContextValue | null>(null);

interface GridSelectionProviderProps extends UseGridSelectionOptions {
  children: ReactNode;
}

export const GridSelectionProvider: React.FC<GridSelectionProviderProps> = ({
  children,
  onRowDblClick
}) => {
  const selection = useGridSelection({ onRowDblClick });

  const contextValue: GridSelectionContextValue = {
    state: selection.state,
    selectRow: selection.selectRow,
    toggleRow: selection.toggleRow,
    doubleClickRow: selection.doubleClickRow,
    isRowSelected: selection.isRowSelected
  };

  return (
    <GridSelectionContext.Provider value={contextValue}>
      {children}
    </GridSelectionContext.Provider>
  );
};

export const useGridSelectionContext = () => {
  const context = useContext(GridSelectionContext);
  if (!context) {
    throw new Error('useGridSelectionContext must be used within GridSelectionProvider');
  }
  return context;
};