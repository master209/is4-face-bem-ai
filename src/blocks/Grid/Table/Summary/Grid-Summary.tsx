import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnGrid, useGridDataContext } from '../..';

import './Grid-Summary.scss';

export const GridSummary: FC<IClassNameProps> = () => {
  const { state: dataState } = useGridDataContext();

  if(dataState === undefined) { return null; }
  const { tableHead, tableSummary } = dataState;

  return (
    <tr className={cnGrid('Summary')}>
      {tableHead && Object.keys(tableHead).map((key) => (
        tableSummary && tableSummary[key]
          ? <td>{tableSummary[key]}</td>
          : <td>&nbsp;</td>
      ))}
    </tr>
  );
};
