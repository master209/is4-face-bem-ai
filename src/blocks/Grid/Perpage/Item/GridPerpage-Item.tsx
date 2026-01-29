import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnGrid } from '../..';

import './GridPerpage-Item.scss';

export interface IGridPerpageItemProps extends IClassNameProps {
  item: number;
}

export const GridPerpageItem: FC<IGridPerpageItemProps> = ({item}) => (
  <option className={cnGrid('PerpageItem')}>
    {item}
  </option>
);
