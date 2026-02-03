import { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { IGridRow, OnRowDblClick } from '../types';

export interface GridSelectionState {
  selectedRow?: string;
}

export interface UseGridSelectionOptions {
  onRowDblClick?: OnRowDblClick;
}

export const useGridSelection = ({ onRowDblClick }: UseGridSelectionOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  // Отладка изменения location
  useEffect(() => {
    console.log('📍 LOCATION CHANGED:', pathname);
  }, [pathname]);

  const [state, setState] = useState<GridSelectionState>({
    selectedRow: searchParams.get('selectedRow') || undefined
  });

  // Синхронизация с URL
  useEffect(() => {
    const selectedRow = searchParams.get('selectedRow');
    setState({ selectedRow: selectedRow || undefined });
  }, [searchParams]);

  const selectRow = useCallback((rowId: string | undefined) => {
    setState({ selectedRow: rowId });

    const newParams = new URLSearchParams(searchParams);
    if (rowId) {
      newParams.set('selectedRow', rowId);
    } else {
      newParams.delete('selectedRow');
    }
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const toggleRow = useCallback((rowId: string) => {
    const newSelectedRow = state.selectedRow === rowId ? undefined : rowId;
    selectRow(newSelectedRow);
  }, [state.selectedRow, selectRow]);

/*
  const doubleClickRow = useCallback((row: IGridRow) => {
    if (onRowDblClick) {
      navigate(`${onRowDblClick.navigate}${row.id}`, {
        state: {
          apiHandler: onRowDblClick.apiHandler,
          row
        }
      });
    }
  }, [onRowDblClick, navigate]);
*/

  const doubleClickRow = useCallback((row: IGridRow) => {
    console.log('🔥 DOUBLE CLICK:', { rowId: row.id, onRowDblClick });

    if (onRowDblClick) {
      const targetUrl = `${onRowDblClick.navigate}${row.id}`;
      console.log('🚀 NAVIGATING TO:', targetUrl);

      // Сохраняем данные в sessionStorage для передачи между страницами
      const stateToPass = {
        apiHandler: onRowDblClick.apiHandler,
        row
      };
      sessionStorage.setItem('gridRowViewState', JSON.stringify(stateToPass));
      console.log('💾 STATE SAVED TO SESSIONSTORAGE:', stateToPass);

      // Выполняем навигацию
      window.location.assign(targetUrl);

      console.log('✅ NAVIGATE COMPLETED');
    } else {
      console.log('❌ NO onRowDblClick DATA');
    }
  }, [onRowDblClick]);

  const isRowSelected = useCallback((rowId: string): boolean => {
    return state.selectedRow === rowId;
  }, [state.selectedRow]);

  return {
    state,
    selectRow,
    toggleRow,
    doubleClickRow,
    isRowSelected
  };
};
