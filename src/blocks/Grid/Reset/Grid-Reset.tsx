import React, { FC, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IClassNameProps } from '@bem-react/core';
import { Tooltip } from '@yandex/ui/Tooltip/desktop/bundle';

import { cnGrid, SORT_DEFAULT, useGridFiltersContext, useGridPaginationContext, useGridDataContext } from '..';

import './Grid-Reset.scss';
import './_filtered/Grid-Reset_filtered.scss';

// компонент сброса фильтров и сортировок грида
export const GridReset: FC<IClassNameProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

    const { state: filtersState, resetFilters } = useGridFiltersContext();
    const { state: paginationState } = useGridPaginationContext();
    const { state: dataState } = useGridDataContext();

    const sorted = filtersState.sort !== SORT_DEFAULT || paginationState.page !== '1';

    const handleClick = () => {
      setSearchParams({
        sort: SORT_DEFAULT,
        page: '1',
        perPage: paginationState.perPage,
        selectedRow: ''
      });

      resetFilters();
    };

    useEffect(() => {
      const tmp = Object.fromEntries([...searchParams]);
      const hasFilters = Boolean(
        Object.values(filtersState.filters).some(v => v) ||
        sorted ||
        (dataState.formName && Object.entries(tmp).some(([key, val]) =>
          key.includes(dataState.formName!) && !!val
        ))
      );

      setFiltered(hasFilters);
    }, [searchParams, filtersState.filters, sorted, dataState.formName]);

    return (
      <>
        <div
          ref={ref}
          className={cnGrid('Reset', {filtered})}
          onClick={handleClick}
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >&nbsp;
        </div>
        <Tooltip view="default" size="s" anchor={ref} visible={visible}>
          {filtered ? 'Сбросить фильтры и сортировки' : 'Нет фильтров или сортировок'}
        </Tooltip>
      </>
    );
};
