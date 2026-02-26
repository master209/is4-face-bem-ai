import { useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IUniversalTab } from '../../Tab';

export interface UseTabUrlSyncReturn {
  currentTabId: string;
  updateTabId: (tabId: string) => void;
}

export const useTabUrlSync = (tabs: IUniversalTab[]): UseTabUrlSyncReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Получаем ID первого таба для fallback
  const firstTabId = tabs.length > 0 ? tabs[0].id : '';

  // Текущее значение из URL или fallback
  const currentTabId = useMemo(() => {
    const urlTabId = searchParams.get('tabActive');

    // Если табы еще не загружены, возвращаем пустую строку
    if (tabs.length === 0) return '';

    // Если в URL есть валидный tab ID, используем его
    if (urlTabId && tabs.some(tab => tab.id === urlTabId)) {
      return urlTabId;
    }

    // Иначе возвращаем ID первого таба
    return firstTabId;
  }, [searchParams, tabs, firstTabId]);

  // Инициализация URL при первой загрузке (когда табы загружены)
  useEffect(() => {
    if (tabs.length > 0 && !searchParams.has('tabActive')) {
      setSearchParams({ tabActive: firstTabId }, { replace: true });
    }
  }, [tabs.length, firstTabId, searchParams, setSearchParams]);

  // Коррекция невалидного URL-параметра
  useEffect(() => {
    const urlTabId = searchParams.get('tabActive');
    if (tabs.length > 0 && urlTabId && !tabs.some(tab => tab.id === urlTabId)) {
      setSearchParams({ tabActive: firstTabId }, { replace: true });
    }
  }, [tabs, firstTabId, searchParams, setSearchParams]);

  // Функция обновления URL
  const updateTabId = useCallback((tabId: string) => {
    setSearchParams({ tabActive: tabId });
  }, [setSearchParams]);

  return { currentTabId, updateTabId };
};