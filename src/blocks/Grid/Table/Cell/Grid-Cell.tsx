import React, { ReactNode, FC, Dispatch, SetStateAction } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnGrid, IGridRow, Inputs } from '../..';

import './Grid-Cell.scss';
import './_ellipsis/Grid-Cell_ellipsis.scss';
import './_hidden/Grid-Cell_hidden.scss';
import '../../../Loading/Loading.scss';

export interface IGridCellProps extends IClassNameProps {
  children: ReactNode;
  row: IGridRow;
  field: string;
  setTip: Dispatch<SetStateAction<string>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  inputs: Inputs;
  inputType?: 'checkbox' | undefined; // тип контрола ячейки таблицы как условие для модификатора
  hidden?: boolean; // не отображаемая ячейка?
}

// компонент - ячейка таблицы
export const GridCell: FC<IGridCellProps> = ({
  children,
  row,
  field,
  setTip,
  setVisible,
  inputs,
  inputType,
  hidden,
  className
}) => {
  const isTooLong = (str: string) => str.length > 36; // с какой длины строки отображать тултип для нее

  return(
    <td className={cnGrid('Cell', {hidden})}>
      <p className={cnGrid('Cell', {ellipsis: true}, [className])}
        onClick={() => {
          setTip(field);
          return isTooLong(children as string) && setVisible(true);
        }}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </p>
    </td>
  );
};
