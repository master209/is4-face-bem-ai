import { useState, useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TableFilterItems } from '../types';
import { getSort } from '../helpers';

export interface GridFiltersState {
  sort: string;
  filters: Record<string, string>;
  isResetFilters: boolean;
}

export interface UseGridFiltersOptions {
  formName: string;
  tableFilter?: TableFilterItems;
  initialSort?: string;
}

export const useGridFilters = ({
  formName,
  tableFilter,
  initialSort = '-id'
}: UseGridFiltersOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSortRef = useRef(initialSort);

  const [state, setState] = useState<GridFiltersState>({
    sort: initialSort,
    filters: {},
    isResetFilters: false
  });

  // Инициализация фильтров из URL
  useEffect(() => {
    const filters: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      if (key.startsWith(formName)) {
        const fieldName = key.replace(`${formName}[`, '').replace(']', '');
        filters[fieldName] = value;
      }
    });

    setState(prev => ({
      ...prev,
      filters,
      sort: searchParams.get('sort') || initialSortRef.current
    }));
  }, [searchParams, formName]);

  const updateSort = useCallback((column: string) => {
    const newSort = getSort(state.sort, column);

    setState(prev => ({ ...prev, sort: newSort }));

    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSort);
    newParams.set('page', '1'); // Сброс на первую страницу при сортировке
    setSearchParams(newParams);
  }, [state.sort, searchParams, setSearchParams]);

  const updateFilter = useCallback((field: string, value: string) => {
    const newFilters = { ...state.filters, [field]: value };

    setState(prev => ({ ...prev, filters: newFilters }));

    const newParams = new URLSearchParams(searchParams);
    newParams.set(`${formName}[${field}]`, value);
    newParams.set('page', '1'); // Сброс на первую страницу при фильтрации
    setSearchParams(newParams);
  }, [state.filters, formName, searchParams, setSearchParams]);

  const resetFilters = useCallback(() => {
    setState(prev => ({ ...prev, isResetFilters: true }));

    // Очищаем параметры формы из URL
    const newParams = new URLSearchParams(searchParams);

    // Удаляем все параметры формы
    searchParams.forEach((_, key) => {
      if (key.startsWith(formName)) {
        newParams.delete(key);
      }
    });

    // Сбрасываем сортировку и страницу
    newParams.set('sort', initialSortRef.current);
    newParams.set('page', '1');

    setSearchParams(newParams);

    // Через небольшую задержку сбрасываем флаг
    setTimeout(() => {
      setState(prev => ({ ...prev, isResetFilters: false, filters: {} }));
    }, 100);
  }, [formName, searchParams, setSearchParams]);

  const getFilterValue = useCallback((field: string): string => {
    return state.filters[field] || '';
  }, [state.filters]);

  return {
    state,
    updateSort,
    updateFilter,
    resetFilters,
    getFilterValue
  };
};