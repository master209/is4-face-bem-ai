import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { GRID_PER_PAGE, PER_PAGE_LIST_INIT, PER_PAGE_INIT } from '..';

export interface GridPaginationState {
  page: string; // номер текущей страницы
  perPage: string; // требуемое кол-во строк на одной странице
  pagesCount: number; // всего страниц в пагинаторе
  pagesRangeStart: number; // отображаемый номер начальной страницы диапазона
  pagesRangeEnd: number; // отображаемый номер конечной страницы диапазона
}

export interface UseGridPaginationOptions {
  rowsFiltered: number; // всего строк с учетом фильтрации
  perpageList: string[]; //массив элементов выпад списка для perPage
  initialPerPage?: string; // !на сервере в API должно быть то же дефолтное значение для initialPerPage
  maxPagesInRange?: number;
}

export const useGridPagination = ({
  rowsFiltered,
  perpageList = PER_PAGE_LIST_INIT,
  initialPerPage = PER_PAGE_INIT,
  maxPagesInRange = 10
}: UseGridPaginationOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, setState] = useState<GridPaginationState>({
    page: '1',
    perPage: initialPerPage,
    pagesCount: 0,
    pagesRangeStart: 1,
    pagesRangeEnd: maxPagesInRange
  });

  // Синхронизация с URL
  useEffect(() => {
    const page = searchParams.get('page') || '1';
    const perPage = searchParams.get('perPage') || initialPerPage;

    const pagesCount = Math.ceil(rowsFiltered / parseInt(perPage));

    // Вычисляем диапазон страниц для отображения
    const currentPage = parseInt(page);
    const halfRange = Math.floor(maxPagesInRange / 2);
    let pagesRangeStart = Math.max(1, currentPage - halfRange);
    let pagesRangeEnd = Math.min(pagesCount, pagesRangeStart + maxPagesInRange - 1);

    // Корректируем диапазон, если он выходит за границы
    if (pagesRangeEnd - pagesRangeStart + 1 < maxPagesInRange) {
      pagesRangeStart = Math.max(1, pagesRangeEnd - maxPagesInRange + 1);
    }

    setState(prev => ({
      ...prev,
      page,
      perPage,
      pagesCount,
      pagesRangeStart,
      pagesRangeEnd
    }));
  }, [searchParams, rowsFiltered, initialPerPage, maxPagesInRange]);

  const goToPage = useCallback((pageNum: number | string) => {
    const page = pageNum.toString();

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page);
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const changePerPage = useCallback((newPerPage: string) => {
    // Сохраняем в localStorage
    localStorage.setItem(GRID_PER_PAGE, newPerPage);

    const newParams = new URLSearchParams(searchParams);
    newParams.set('perPage', newPerPage);
    newParams.set('page', '1'); // Сброс на первую страницу
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const nextPage = useCallback(() => {
    const next = Math.min(parseInt(state.page) + 1, state.pagesCount);
    goToPage(next);
  }, [state.page, state.pagesCount, goToPage]);

  const prevPage = useCallback(() => {
    const prev = Math.max(parseInt(state.page) - 1, 1);
    goToPage(prev);
  }, [state.page, goToPage]);

  const firstPage = useCallback(() => {
    goToPage(1);
  }, [goToPage]);

  const lastPage = useCallback(() => {
    goToPage(state.pagesCount);
  }, [state.pagesCount, goToPage]);

  return {
    state,
    goToPage,
    changePerPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage
  };
};
