import React, { FC, MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Link } from '../../..';
import { cnGrid, useGridPaginationContext } from '../..';

import './Grid-PaginationLink.scss';

export interface IPaginationLinkProps extends IClassNameProps {
  pageNum: number;
  children: string;
  active?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
}

export const PaginationLink: FC<IPaginationLinkProps> = ({
  pageNum,
  children,
  active,
  disabled,
  ellipsis
}) => {
  const { goToPage } = useGridPaginationContext();

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    goToPage(pageNum || children);
  };

  return (
    <Link
      className={cnGrid('PaginationLink', {active, disabled, ellipsis})}
      href={pageNum.toString() || children}
      handleClick={handleClick}
    >
      {children}
    </Link>
  );
};
