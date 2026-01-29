import React, { FC, useState, useEffect } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { useGridSelectionContext } from '../../../blocks/Grid';
import { api } from '../../../store';
import { Header } from './types';
import { round } from '../../../helpers';

import './GridHeader.scss';

// компонент для заголовочной информации грида реестра платежей
export const GridHeader: FC<IClassNameProps> = () => {
  const [header, setHeader] = useState(Header);
  const { state: selectionState } = useGridSelectionContext();
  const { selectedRow } = selectionState;
  const {date, data} = header;

  const dispatchGridHeader = async (req: string) => {
    const res = await api.get(req);
    setHeader(res.data as typeof Header);
  };

  useEffect(() => {
    selectedRow &&
    dispatchGridHeader(`banks-payment/header/${selectedRow}`);
  },[selectedRow]);

  if(!data) {
    return null;
  }

  const {day, month} = data;

  return (
    <div className="Tables">
      <table>
        <thead>
          <tr><th colSpan={3} className="Day-Head">выбран день: {date}</th></tr>
          <tr><td>&nbsp;</td><td>сумма</td><td>кол-во</td></tr>
        </thead>
        <tbody>
          <tr>
            <td>по банку:</td><td>{round(+day.bank.sumdaybank)}</td><td>{+day.bank.countdaybank}</td>
          </tr>
          <tr>
            <td>сверено:</td><td>{round(+day.done.sumdaydone)}</td><td>{+day.done.countdaydone}</td>
          </tr>
          <tr>
            <td>не сверено:</td>
            <td>{round( +day.bank.sumdaybank - +day.done.sumdaydone)}</td>
            <td>{+day.bank.countdaybank - +day.done.countdaydone}</td>
          </tr>
          {/*
            <tr>
              <td>прочие:</td><td>{round(+day.bad.sumdaybad)}</td><td>{+day.bad.countdaybad}</td>
            </tr>
          */}
        </tbody>
      </table>
      <table>
        <thead>
          <tr><th colSpan={3} className="Day-Head">выбран месяц: {date.substr(3)}</th></tr>
          <tr><td>&nbsp;</td><td>сумма</td><td>кол-во</td></tr>
        </thead>
        <tbody>
          <tr>
            <td>по банку:</td><td>{round(+month.bank.summonbank)}</td><td>{+month.bank.countmonbank}</td>
          </tr>
          <tr>
            <td>сверено:</td><td>{round(+month.done.summondone)}</td><td>{+month.done.countmondone}</td>
          </tr>
          <tr>
            <td>не сверено:</td>
            <td>{round( +month.bank.summonbank - +month.done.summondone)}</td>
            <td>{+month.bank.countmonbank - +month.done.countmondone}</td>
          </tr>
          {/*
            <tr>
              <td>прочие:</td><td>{round(+month.bad.summonbad)}</td><td>{+month.bad.countmonbad}</td>
            </tr>
          */}
        </tbody>
      </table>
    </div>
  );
};
