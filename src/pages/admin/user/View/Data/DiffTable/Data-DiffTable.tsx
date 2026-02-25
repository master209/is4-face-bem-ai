import React, { FC } from 'react';
import { cnData } from '../Data';
import { IDiffItem } from '../types';

export interface IDataDiffTableProps {
  diffData: IDiffItem[];
}

export const DataDiffTable: FC<IDataDiffTableProps> = ({
  diffData
}) => {
  return (
    <table className={cnData('DiffTable')}>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ИС</th>
          <th>ЛК</th>
        </tr>
      </thead>
      <tbody>
        {diffData.map((item: IDiffItem, index: number) => (
          <tr key={index}>
            <th className={cnData('DiffTableHeader')}>{item.lab}</th>
            <td>{item.is}</td>
            <td>{item.lk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};