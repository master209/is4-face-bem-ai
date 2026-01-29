import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { TableRow, GridCell } from '../..';

export interface IGridRowProps extends IClassNameProps {
  tableRows: object;
}

export const GridRow: FC<IGridRowProps> = ({tableRows}) => (
  <>
    {Object.entries(tableRows as object).map(([idx, row]: [string, TableRow]) => (
      <tr
        className="Grid-Row"
        key={idx}
      >
        {Object.entries(row as object).map(([key, val]: [string, string]) => (
            <GridCell
              key={key}
              field={key} val={val}
            />
        ))}
      </tr>
    ))}
  </>
);
