import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { api } from '../../../store';
import { GRID_PER_PAGE, PER_PAGE_LIST_INIT, PER_PAGE_INIT } from '..';
import {
  IGridRow,
  TableHeadItems,
  TableFilterItems,
  TableSummaryItems,
  Inputs,
  RowActions,
  OnRowDblClick
} from '../types';

export interface GridDataState {
  // Метаданные таблицы
  tableHead?: TableHeadItems; // заголовок таблицы
  tableFilter?: TableFilterItems; // фильтры
  tableSummary?: TableSummaryItems; // итоговые суммы под числовыми столбцами
  formName?: string; //при фильтрации используется как префикс для формирования search-параметра: &BanksPayment[field_name]=fieldVal

  // Данные
  tableRows: IGridRow[]; // строки таблицы
  rowsFiltered: number; // всего строк с учетом фильтрации
  rowsPageCount: number; //фактическое кол-во строк на странице (для последней страницы может быть меньше, чем perPage)

  // Пагинация
  perpageList: string[]; //массив элементов выпад списка для perPage
  perPage: string; // требуемое кол-во строк на одной странице
  page: string; // номер текущей страницы
  pagesCount: number; // всего страниц в пагинаторе
  pagesRangeStart: number; // отображаемый номер начальной страницы диапазона
  pagesRangeEnd: number; // отображаемый номер конечной страницы диапазона

  // Состояние
  sort: string;
  selectedRow?: string;

  // Дополнительно
  inputs: Inputs; // ячейки таблицы, отображаемые как контролы
  actions: RowActions; // возможные действия над строкой в таблце грида,
  onRowDblClick?: OnRowDblClick; // что делать по даблклику на строке

  // UI состояние
  loading: boolean;
  error: string | null;
}

export interface UseGridDataOptions {
  url: string;
  initialData?: Partial<GridDataState>;
}

export const useGridData = ({ url, initialData }: UseGridDataOptions) => {
  const [searchParams] = useSearchParams();
  const prevSearchParamsRef = useRef<string>();
  const hasLoadedRef = useRef(false);

  const [state, setState] = useState<GridDataState>(() => ({
    tableHead: undefined,
    tableFilter: undefined,
    tableSummary: undefined,
    formName: initialData?.formName, // Берем только из initialData
    tableRows: [],
    rowsFiltered: 0,
    rowsPageCount: 0,
    perpageList: PER_PAGE_LIST_INIT,
    perPage: searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || PER_PAGE_INIT,
    page: searchParams.get('page') || '1',
    pagesCount: 0,
    pagesRangeStart: 0,
    pagesRangeEnd: 0,
    sort: searchParams.get('sort') || '-id',
    selectedRow: searchParams.get('selectedRow') || '',
    inputs: {},
    actions: {},
    loading: false,
    error: null,
    ...initialData
  }));

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    // Добавляем параметры сортировки и пагинации ИЗ URL
    const sort = searchParams.get('sort') || '-id';
    const page = searchParams.get('page') || '1';
    const urlPerPage = searchParams.get('perPage');
    const storedPerPage = localStorage.getItem(GRID_PER_PAGE);

    params.set('sort', sort);
    params.set('page', page);

    // Добавляем perPage только если он есть в URL или localStorage
    if (urlPerPage || storedPerPage) {
      const perPage = urlPerPage || storedPerPage;
      if (perPage) { // Дополнительная проверка на null
        params.set('perPage', perPage);
      }
    }

    // Добавляем фильтры из формы (уже в searchParams)
    // Добавляем ВСЕ параметры, которые выглядят как фильтры (содержат [ и ])
    searchParams.forEach((value, key) => {
      if (key.includes('[') && key.includes(']')) {
        params.set(key, value);
      }
    });

    return params.toString();
  }, [searchParams, state.formName, state.perPage]);

  const loadData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const response = await api.get(`${url}?${queryString}`);

      const data: Partial<GridDataState> = response.data;

      setState(prev => {
        // Всегда берем perPage из ответа сервера, так как он всегда должен быть определен
        // Сервер гарантирует, что вернет правильное значение perPage
        return {
          ...prev,
          ...data,
          loading: false
        };
      });

    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }));
    }
  }, [url, queryString]);

  const updateParams = useCallback((updates: Partial<GridDataState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Загрузка данных при монтировании и изменениях параметров
  useEffect(() => {
    const currentParams = searchParams.toString();

    // При первой загрузке всегда загружаем данные
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;
      loadData();
      prevSearchParamsRef.current = currentParams;
      return;
    }

    // При последующих изменениях - только если параметры действительно изменились
    if (prevSearchParamsRef.current !== currentParams) {
      loadData();
      prevSearchParamsRef.current = currentParams;
    }
  }, [searchParams]); // Убрали loadData из зависимостей

  return {
    state,
    loadData,
    updateParams,
    setState
  };
};
