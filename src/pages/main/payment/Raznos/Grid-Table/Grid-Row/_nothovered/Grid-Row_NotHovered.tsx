import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

export interface IGridRowNotHoveredProps extends IClassNameProps {
  error: string;
  sumDelta: number;
  isTableRowsValid: boolean;
}

export const GridRowNotHovered: FC<IGridRowNotHoveredProps> = ({error, sumDelta, isTableRowsValid}) => (
  <tr className="Grid-Row NotHovered">
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td
      className={`Grid-Cell ${error}`}
      align="right"
    >
      {sumDelta !== 0 && isTableRowsValid ? sumDelta : null}
    </td>
  </tr>
);
