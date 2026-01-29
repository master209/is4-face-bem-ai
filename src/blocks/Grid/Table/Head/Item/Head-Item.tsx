import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnHead } from '../Grid-Head';
import { useGridFiltersContext, getSort } from '../../..';

import './Head-Item.scss';
import './_sorted/Head-Item_sorted.scss';
import './_sorted/_desc/Head-Item_desc.scss';
import './_notSortable/Head-Item_notSortable.scss';
import './_hidden/Head-Item_hidden.scss';

export interface IHeadItemProps extends IClassNameProps {
  id: string;
  val: string;
  currSort: string;
  notSortable?: boolean; // не сортируемый столбец?
  hidden?: boolean; // не отображаемый столбец?
}

// компонент - ячейка заголовка таблицы
export const HeadItem: FC<IHeadItemProps> = ({
  id,
  val,
  currSort,
  notSortable,
  hidden,
}) => {
  const { updateSort } = useGridFiltersContext();

  const handleClick = (key: string) => {
    !notSortable && updateSort(key);
  };

  const arrow = (
    <svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
      <polygon fill="var(--ci-primary-color, currentColor)" points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625" className="ci-primary"></polygon>
    </svg>
  );

  return (
    <th
      className={cnHead('Item', {
        notSortable,
        hidden,
        sorted: id === currSort || `-${id}` === currSort,
        desc: `-${id}` === currSort
      })}
      id={id}
      onClick={() => handleClick(id)}
    >
      <div>
        <p>{val}</p>
        {!notSortable && arrow}
      </div>
    </th>
  );
};
