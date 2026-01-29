import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { cnGrid, useGridDataContext } from '../..';
import { FilterItem } from './Item/Filter-Item';

import './Grid-Filter.scss';

export const cnFilter = cn('Filter');

export const GridFilter: FC<IClassNameProps> = () => {
  const { state: dataState } = useGridDataContext();

  if(dataState === undefined) { return null; }
  const {tableHead, tableFilter, formName} = dataState;

  return (
    <tr className={cnGrid('Filter')}>
      {tableHead && Object.keys(tableHead).map((key) => (
        tableFilter && tableFilter[key] && formName
          ? <FilterItem
            id={key}
            inputData={tableFilter[key]}
            formName={formName}
          />
          : <td>&nbsp;</td>
      ))}
    </tr>
  );
};
