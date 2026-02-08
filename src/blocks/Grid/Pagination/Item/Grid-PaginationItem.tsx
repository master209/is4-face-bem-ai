import React, { FC, useState, useRef } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { Tooltip } from '../../../../lib/yandex-ui/Tooltip';

import { TipTipe, PaginationLink as Link } from '..';
import { cnGrid, useGridPaginationContext, useGridDataContext } from '../..';

import './Grid-PaginationItem.scss';
import './_disabled/Grid-PaginationItem_disabled.scss';
import './_active/Grid-PaginationItem_active.scss';
import './_hidden/Grid-PaginationItem_hidden.scss';

export interface IPaginationItemProps extends IClassNameProps {
  pageNum: number;
  children: string;
  disabled?: boolean;
  hidden?: boolean;
  ellipsis?: boolean;
  tipTipe?: string;
}

export const PaginationItem: FC<IPaginationItemProps> = ({
  pageNum,
  children,
  disabled,
  hidden,
  ellipsis,
  tipTipe,
}) => {
  const { state: paginationState } = useGridPaginationContext();
  const { state: dataState } = useGridDataContext();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const getTip = (type: string) => {
    switch (type) {
      case TipTipe.Home:
        return 'на первую страницу';
      case TipTipe.End:
        return 'на последнюю страницу';
      case TipTipe.Prev:
        return 'на предыдущую страницу';
      case TipTipe.Next:
        return 'на следующую страницу';
    }
  };

  const isActive = () =>
    paginationState.page === children ||
    (
      dataState.pagesCount === +children && // если уже и так на последней странице...
      +paginationState.page > +children // ...и затребован еще больший номер страницы
    );

  return (
    <>
      <li
        // className={cnPagination('Item', {active: isActive(), disabled, hidden})}
        className={cnGrid('PaginationItem', {active: isActive(), disabled, hidden})}
        ref={ref}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Link pageNum={pageNum} ellipsis={ellipsis}>
          {children}
        </Link>
      </li>
      {tipTipe && !disabled &&
        <Tooltip theme='light' view="default" size="m" anchor={ref} visible={visible}>
          {getTip(tipTipe)}
        </Tooltip>}
    </>
  );
};
