import React, { FC, ChangeEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { InputSelect } from '../../InputSelect';
import { cnGrid, useGridPaginationContext, useGridDataContext, GridPerpageItem, GRID_PER_PAGE } from '..';

import './Grid-Perpage.scss';

// компонент управления количеством выводимых строк в гриде
export const GridPerpage: FC<IClassNameProps> = () => {
  const { changePerPage, state: paginationState } = useGridPaginationContext();
  const { state: dataState } = useGridDataContext();

  const handleChange = ({target: {value: newPerPage}}: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem(GRID_PER_PAGE, newPerPage);
    changePerPage(newPerPage);
  };

  return (
    <div className={cnGrid('Perpage')}>
      <InputSelect
        className={cnGrid('Perpage')}
        label="Строк на странице:"
        labelClass='Grid-PerpageLabel'
        name="Perpage"
        value={paginationState.perPage}
        handleChange={handleChange}
      >
        {dataState.perpageList.map((item) => (
          <GridPerpageItem
            key={item}
            item={+item}
          />
        ))}
      </InputSelect>
    </div>
  );
};
