import React, { useState, ChangeEvent } from 'react';
import { withBemMod } from '@bem-react/core';

import { api } from '../../../../../store';

import { InputCheckbox } from '../../../../InputCheckbox';
import { cnGrid } from '../../..';
import { IGridCellProps } from '../Grid-Cell';

// Модификатор для ячеек таблицы, отображаемых как контрол checkbox
// Данный компонент превращает значение булева поля в управляемый чекбокс.
export const withGridCellInputCheckbox = withBemMod<IGridCellProps>(
  'GridCell',
  { inputType: 'checkbox' }, // тип контрола для этого модификатора
  (GridCell) => ({...props}: IGridCellProps) => {
    const {row, field, inputs} = props;
    const [isLoading, setIsLoading] = useState(false);

    // если булево поле не превращаем в чекбокс, то в ячейке выводится 'да'/'нет'
    const isChecked = () => row[field] === 'да';

    // преобразование в 'да' или 'нет' в зависимости от цифрового значения поля
    const numYesNo = (num: number) => num > 0 ? 'да' : 'нет';

    const handleChange = async (ev: ChangeEvent, checked: boolean) => {
      setIsLoading(true);
      try {
        const response = await api.put(`${inputs[field].apiHandler}/${row.id}`, {
          [field]: checked ? 0 : 1
        });
        row[field] = numYesNo(response.data[field]); // установка значения с сервера
      } catch (error) {
        console.error('Error updating checkbox: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    // доп. условие, используемое при отображении поля чекбокса
    const {key, val, cond} = inputs[field].settings.condition;

    return (
      <GridCell
        {...props}
        className={cnGrid('Cell', {inputType: 'checkbox'})}
      >{eval(`${row[key]}${cond}${val}`) ?
          <InputCheckbox
            name="table-cell-checkbox"
            isChecked={isChecked}
            handleChange={handleChange}
          />
          : ''}
      </GridCell>
    );
  }
);
