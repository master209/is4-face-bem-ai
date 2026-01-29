import React, { FC, useState, useEffect, useRef, FocusEvent, KeyboardEvent, ChangeEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

import { cnFilter } from '../Grid-Filter';
import { useGridFiltersContext, useGridDataContext } from '../../..';

import './Filter-Item.scss';

export interface IFilterItemProps extends IClassNameProps {
  id: string;
  formName: string;
  inputData: {
    type:string;
    data: {
      [key:string]: string;
    };
  };
}

// компонент - фильтр одного столбца
export const FilterItem: FC<IFilterItemProps> = ({id, formName, inputData: {type='text', data}}) => {
  const { updateFilter, getFilterValue } = useGridFiltersContext();
  const { state: dataState } = useGridDataContext();
  const [filter, setFilter] = useState('');
  const [date, setDate] = useState<{start: Date | null, end: Date | null}>({start:null, end:null});
  const inputTextRef = useRef<HTMLInputElement | null>(null);
  const inputSelectRef = useRef<HTMLSelectElement | null>(null);

  // Синхронизация начального значения из фильтров
  useEffect(() => {
    if (type === 'daterange') {
      // Для диапазона дат синхронизируем отдельно start и end
      const startValue = getFilterValue(id + '_from');
      const endValue = getFilterValue(id + '_to');

      // Парсим даты из строковых значений
      const startDate = startValue ? new Date(startValue.split('.').reverse().join('-')) : null;
      const endDate = endValue ? new Date(endValue.split('.').reverse().join('-')) : null;

      setDate({ start: startDate, end: endDate });
    } else {
      const currentValue = getFilterValue(id);
      if (currentValue !== filter) {
        setFilter(currentValue);
      }
    }
  }, [getFilterValue, id, type]);

  const handleKeyUp = (ev: KeyboardEvent) => {
    if ((ev.code === 'Enter' || ev.code === 'NumpadEnter') && inputTextRef.current) {
      const newValue = inputTextRef.current.value;
      setFilter(newValue);
      updateFilter(id, newValue);
    }
  };

  const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    setFilter(newValue);
    updateFilter(id, newValue);
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(ev.target.value);
  };

  const handleChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
    const newValue = target.value;
    setFilter(newValue);
    updateFilter(id, newValue);
  };

  const renderInput = (type: string) => {
    switch (type) {
      case 'text': {
        return (
          <input
            ref={inputTextRef}
            className="InputText"
            type={type}
            maxLength={100}
            id={id}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
            value={filter}
          />
        )}
      case 'list': {
        return (
          <select
            ref={inputSelectRef}
            className="InputSelect"
            name={formName}
            onChange={handleChange}
            value={filter}
          >
            <option value="">&nbsp;</option>
            {Object.entries(data).map(([key, val]) =>
              <option
                value={key}
                selected={val===''}
              >{val}
              </option>)}
          </select>
        )}
      case 'boolList': {
        return (
          <select
            ref={inputSelectRef}
            className="InputSelect"
            name={formName}
            onChange={handleChange}
            value={filter}
          >
            <option value="">&nbsp;</option>
            {Object.entries({'0': 'нет', '1': 'да'}).map(([key, val]) =>
              <option
                value={key}
                selected={val===''}
              >{val}
              </option>)}
          </select>
        )}
      case 'date': {
        return (
          <DatePicker
            selected={date.start}
            dateFormat="dd-MM-yyyy"
            onChange={(d: Date | null) => {
                if(d) {
                  setDate({start:d, end:null});
                  setFilter(d.toLocaleDateString('ru-RU'));
                } else {
                  setDate({start:null, end:null});
                  setFilter('');
                }
              }
            }
          />
        )}
      case 'daterange': {
        return (
          <div className="InputDaterange">
            <DatePicker
              selected={date.start}
              dateFormat="dd-MM-yyyy"
              className="DateFrom"
              onChange={(d: Date | null) => {
                  if(d) {
                    const formattedDate = d.toLocaleDateString('ru-RU');
                    setDate({start:d, end:date.end});
                    updateFilter(id + '_from', formattedDate);
                  } else {
                    setDate({start:null, end:date.end});
                    updateFilter(id + '_from', '');
                  }
                }
              }
            />
            <span className="FilterSeparator">-</span>
            <DatePicker
              selected={date.end}
              dateFormat="dd-MM-yyyy"
              className="DateTo"
              onChange={(d: Date | null) => {
                  if(d) {
                    const formattedDate = d.toLocaleDateString('ru-RU');
                    setDate({start:date.start, end:d});
                    updateFilter(id + '_to', formattedDate);
                  } else {
                    setDate({start:date.start, end:null});
                    updateFilter(id + '_to', '');
                  }
                }
              }
            />
          </div>
        )}
    }
  };

  return (
    <td className={cnFilter('Item')}>
      {renderInput(type)}
    </td>
  );
};
