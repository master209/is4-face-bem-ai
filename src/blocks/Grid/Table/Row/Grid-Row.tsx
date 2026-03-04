import React, { FC, MouseEvent, useState, createRef, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { IClassNameProps, compose } from '@bem-react/core';
import { Tooltip } from '../../../../lib/yandex-ui/Tooltip';

import { Icon } from '../../..';
import { withIconTypeLink } from '../../../Icon/_type/Icon_type_link@desktop';

import { GridCell as GridCellBase, withGridCellInputCheckbox } from '..';
import { cnGrid, IGridRow, useGridDataContext, useGridSelectionContext } from '../..';
import { DBL_CLICK_DELAY, IMG_PATH } from '../../../../const';

import './Grid-Row.scss';
import './_selected/Grid-Row_selected.scss';

const IconTypeLink = compose(withIconTypeLink)(Icon);

export interface IGridRowProps extends IClassNameProps {
  row: IGridRow;
}

// компонент - строка таблицы
export const GridRow: FC<IGridRowProps> = ({row}) => {
  const GridCell = withGridCellInputCheckbox(GridCellBase);

  const { state: dataState } = useGridDataContext();
  const { state: selectionState, toggleRow, doubleClickRow } = useGridSelectionContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [tip, setTip] = useState('id');
  const [prevent, setPrevent] = useState(false);
  const {pathname} = useLocation();
  const ref = createRef<HTMLTableRowElement>();

  const { inputs, actions, onRowDblClick, tableHead } = dataState;
  const { selectedRow } = selectionState;
  const tips: IGridRow = {id: 'ID'};
  const isSelected = () => selectedRow === row.id;
  const isInput = (field: string) => inputs[field];

  const delay = DBL_CLICK_DELAY;
  let timer: ReturnType<typeof setTimeout>;

  const handleActionClick = useCallback((ev: MouseEvent, apiHandler: string) => {
    ev.preventDefault();
    // Пока оставляем старый способ для действий (удаления)
    // TODO: возможно потом тоже перевести на новый подход
  }, []);

  const handleClick = useCallback((ev: MouseEvent, id: string) => {
    timer = setTimeout(() => {
      !prevent && toggleRow(id);
      setPrevent(false);
    }, delay);
  }, [delay, prevent, toggleRow]);

  const handleDoubleClick = useCallback((ev: MouseEvent, id: string) => {
    clearTimeout(timer);
    setPrevent(true);
    doubleClickRow(row);
  }, [doubleClickRow, row]);

  const isHidden = (field: string) => tableHead && tableHead[field] && tableHead[field].hidden;


  return (
    <tr
      ref={ref}
      className={cnGrid('Row', {selected: isSelected()})}
      onClick={(ev) => handleClick(ev, row.id)}
      onDoubleClick={(ev) => handleDoubleClick(ev, row.id)}
    >
      {Object.entries(row).map(([key, val]) => {
        tips[key] = val as string;

        return (
          <GridCell
            key={key}
            row={row}
            field={key}
            inputs={inputs}
            inputType={isInput(key) && 'checkbox'}
            setTip={setTip}
            setVisible={setVisible}
            hidden={isHidden(key)}
          >
            {val}
          </GridCell>
        );
      })}
      <td>{Object.entries(actions).map(([key, val]) => (
        val.apiHandler &&
        <IconTypeLink
          type="link"
          key={key}
          src={`${IMG_PATH}${val.icon}`}
          alt={key}
          title="удалить эти дубли платежей"
          onClick={(ev: MouseEvent) => handleActionClick(ev, val.apiHandler)}
        />
      ))}
      </td>
      <Tooltip theme="dark" view="default" size="m" anchor={ref} visible={visible}>
        {tips[tip]}
      </Tooltip>
    </tr>
  );
};
