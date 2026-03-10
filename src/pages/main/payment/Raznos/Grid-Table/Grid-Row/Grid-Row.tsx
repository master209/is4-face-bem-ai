import React, { FC, Dispatch, SetStateAction, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { RaznosStateContext, objArr, TableRow, GridCell, GridCellInput } from '../..';

export interface IGridRowProps extends IClassNameProps {
  sumArr: objArr;
  setSumArr: Dispatch<SetStateAction<objArr>>;
}

import './Grid-Row.scss';

export const GridRow: FC<IGridRowProps> = ({sumArr, setSumArr}:IGridRowProps) => {
  const {state} = useContext(RaznosStateContext);
  const {isApproval, tableRows} = state;

  return (
    <>
      {Object.entries(tableRows as object).map(([idx, row]: [string, TableRow]) => (
        <tr
          className={`Grid-Row${isApproval ? ' NotHovered' : ''}`}
          key={idx}
        >
          {Object.entries(row as object).map(([key, val]: [string, string]) => (
            key === 'amount' ?
              <GridCellInput
                key={key}
                val={val} row={row}
                sumArr={sumArr}
                setSumArr={setSumArr}
              /> :
              <GridCell
                key={key}
                field={key} val={val}
              />
          ))}
        </tr>
      ))}
    </>
  );
};
