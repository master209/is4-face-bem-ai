import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { RaznosStateContext } from '../..';
import { cellHidden } from '../../../../../../helpers';

import './Grid-Head.scss';

export interface IGridHeadProps extends IClassNameProps {
  isTableRowsValid: boolean;
}

export const GridHead: FC<IGridHeadProps> = ({isTableRowsValid}) => {
  const {state} = useContext(RaznosStateContext);

  return (
    isTableRowsValid ? (
      <thead>
        <tr className="Grid-Head">
          {Object.entries(state.tableHead).map(([key, val]) =>
            <th className={`Grid-Cell ${cellHidden(key)}`} key={key}>{val}</th>
          )}
        </tr>
      </thead>) : null
  );
};
