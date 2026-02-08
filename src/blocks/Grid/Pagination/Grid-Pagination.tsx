import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { TipTipe, PaginationItem as Item } from '.';
import { cnGrid, useGridDataContext, useGridPaginationContext } from '..';

import './Grid-Pagination.scss';

// export const cnPagination = cn('Pagination');

export const Pagination: FC<IClassNameProps> = () => {
  const { state: dataState } = useGridDataContext();
  const { state: paginationState } = useGridPaginationContext();

  const {
    loading,
    tableRows,
    pagesCount,
    pagesRangeStart,
    pagesRangeEnd,
  } = dataState;

  const { page } = paginationState;

  const Items = [];
  for (let i = pagesRangeStart; i <= pagesRangeEnd; i++) {
    Items.push(i.toString());
  }

  const isHidden = pagesRangeEnd === pagesCount;
  const isDisabled = +page === pagesCount;

  return (
    <>
      { /* eslint-disable */
        !loading ? (
          tableRows.length ? (
            <ul className={cnGrid('Pagination')}>
              <Item
                pageNum={1}
                disabled={+page === 1}
                tipTipe={TipTipe.Home}
              >«</Item>
              <Item
                pageNum={+page - 1}
                disabled={+page === 1}
                tipTipe={TipTipe.Prev}
              >‹</Item>
              {Items.map((item) => (
                <Item
                  pageNum={+item}
                  key={item}
                >{item}</Item>
              ))}
              <Item
                pageNum={+page + 1}
                disabled={isDisabled}
                tipTipe={TipTipe.Next}
              >›</Item>
              <Item
                pageNum={pagesCount}
                disabled={isDisabled}
                tipTipe={TipTipe.End}
              >»</Item>
              <Item pageNum={pagesCount} disabled hidden={isHidden} ellipsis>...</Item>
              <Item
                pageNum={pagesCount}
                disabled={isDisabled}
                hidden={isHidden}
                tipTipe={TipTipe.End}
              >
                {pagesCount.toString()}
              </Item>
            </ul>)
            : null)
          : 'загружаю...'
      }
    </>
  );
};
