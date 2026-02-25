import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import './Grid-Head.scss';

export interface IGridHeadProps extends IClassNameProps {
  tableHead: object;
}

export const GridHead: FC<IGridHeadProps> = ({tableHead}) => (
  <thead>
    <tr className="Grid-Head">
      {Object.entries(tableHead).map(([key, val]) =>
        <th className="Grid-Cell" key={key}>{val}</th>
      )}
    </tr>
  </thead>
);
