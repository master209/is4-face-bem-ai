import React, { FC, Dispatch, SetStateAction, ChangeEvent, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { RaznosStateContext, objArr, TableRow } from '../../..';

import './Grid-Cell_Input.scss';

export interface IGridCellProps extends IClassNameProps {
  val: string;
  row: TableRow;
  sumArr: objArr;
  setSumArr: Dispatch<SetStateAction<objArr>>;
}

export const GridCellInput: FC<IGridCellProps> = ({val, row, sumArr, setSumArr}) => {
  const {state} = useContext(RaznosStateContext);
  const {isApproval} = state;

  const isSumValid = (sum: string) => !sum || /^\d+(\.?\d{0,2})?$/.test(sum);

  return (
    <td className="Grid-Cell">
      <input
        className="Input"
        type='text'
        disabled={isApproval}
        value={sumArr[+row.id] || ''}
        onChange={({target}: ChangeEvent<HTMLInputElement>) =>
          isSumValid(target.value) && setSumArr({...sumArr, [row.id]: target.value})}
      />
    </td>
  );
};
