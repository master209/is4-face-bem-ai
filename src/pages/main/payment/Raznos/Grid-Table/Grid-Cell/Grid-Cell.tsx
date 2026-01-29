import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import {cellHidden} from '../../../../../../helpers';

import './Grid-Cell.scss';

export interface IGridCellInputProps extends IClassNameProps {
  field: string;
  val: string;
}

export const GridCell: FC<IGridCellInputProps> = ({field, val}) => (
  <td className={`Grid-Cell ${cellHidden(field)}`}>
    {val}
  </td>
);
