import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getPage, getPerPage } from '../helpers';
import { GRID_PER_PAGE } from '..';

export interface UseUrlSyncOptions {
  onParamsChange?: (params: URLSearchParams) => void;
  initialParams?: Record<string, string>;
}

export const useUrlSync = ({
  onParamsChange,
  initialParams = {}
}: UseUrlSyncOptions = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Инициализация URL параметров
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);

    // Проверяем, есть ли необходимые параметры
    const hasPage = currentParams.has('page');
    const hasSort = currentParams.has('sort');
    const hasPerPage = currentParams.has('perPage');

    if (!hasPage || !hasSort || !hasPerPage) {
      const newParams: Record<string, string> = {
        sort: currentParams.get('sort') || initialParams.sort || '-id',
        page: hasPage ? currentParams.get('page')! : (initialParams.page || '1'),
        perPage: hasPerPage ? currentParams.get('perPage')! :
          (initialParams.perPage || getPerPage(localStorage.getItem(GRID_PER_PAGE))),
        selectedRow: currentParams.get('selectedRow') || initialParams.selectedRow || '',
        ...initialParams
      };

      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams, initialParams]);

  // Вызываем callback при изменении параметров
  useEffect(() => {
    if (onParamsChange) {
      onParamsChange(searchParams);
    }
  }, [searchParams, onParamsChange]);

  const updateParams = useCallback((updates: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === '' || value === undefined) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const getParam = useCallback((key: string): string | null => {
    return searchParams.get(key);
  }, [searchParams]);

  const hasParam = useCallback((key: string): boolean => {
    return searchParams.has(key);
  }, [searchParams]);

  return {
    searchParams,
    updateParams,
    getParam,
    hasParam
  };
};
