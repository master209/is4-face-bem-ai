import React, { FC, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { Link } from '../../..';
import { cnGrid, useGridPaginationContext } from '../..';

import './Grid-PaginationLink.scss';
import './_ellipsis/Grid-PaginationLink_ellipsis.scss';

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
      className={cnGrid('PaginationLink', {ellipsis})}
      href={pageNum.toString() || children}
      handleClick={handleClick}
    >
      {children}
    </Link>
  );
};
