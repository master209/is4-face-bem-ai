import React, { FC } from 'react';
import { cnTab, IDiffItem } from '../types';

interface ITabDiffTableProps {
  diffData: IDiffItem[];
}

export const TabDiffTable: FC<ITabDiffTableProps> = ({
  diffData
}) => {
  return (
    <table className={cnTab('DiffTable')}>
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
            <th className={cnTab('DiffTableHeader')}>{item.lab}</th>
            <td>{item.is}</td>
            <td>{item.lk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};