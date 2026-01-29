import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { GridHead, GridRow } from '../../View';

import './Grid-Table.scss';

export interface IGridTableProps extends IClassNameProps {
  tableHead: object;
  tableRows: object;
}

export const GridTable: FC<IGridTableProps> = ({tableHead, tableRows}) => (
  <div className="Grid-Table">
    <table>
      <GridHead tableHead={tableHead}/>
      <tbody>
        <GridRow tableRows={tableRows}/>
      </tbody>
    </table>
  </div>
);
