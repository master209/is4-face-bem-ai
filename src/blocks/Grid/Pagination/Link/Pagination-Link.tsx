import React, { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { Link } from '../../..';
import { cnPagination } from '..';
import { useGridPaginationContext } from '../..';

import './Pagination-Link.scss';
import './_ellipsis/Pagination-Link_ellipsis.scss';

export interface IPaginationLinkProps extends IClassNameProps {
  pageNum: number;
  children: string;
  ellipsis?: boolean;
}

export const PaginationLink: FC<IPaginationLinkProps> = ({pageNum, children, ellipsis}) => {
  const { goToPage } = useGridPaginationContext();

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    goToPage(pageNum || children);
  };

  return (
    <Link
      className={cnPagination('Link', {ellipsis})}
      href={pageNum.toString() || children}
      handleClick={handleClick}
    >
      {children}
    </Link>
  );
};
