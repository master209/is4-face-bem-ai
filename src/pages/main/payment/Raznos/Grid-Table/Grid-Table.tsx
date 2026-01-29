import React, { FC, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { Button } from '../../../../../blocks/Button';
import {
  RaznosStateContext,
  objArr,
  TableRow,
  GridHead,
  GridRow,
  Buttons,
  GridRowNotHovered
} from '..';

import {api} from '../../../../../store';

import './Grid-Table.scss';

export const GridTable: FC<IClassNameProps> = () => {
  const {id: ID} = useParams();
  const navigate = useNavigate();
  const {state} = useContext(RaznosStateContext);
  const [sumDelta, setSumDelta] = useState(0);
  const [sumArr, setSumArr] = useState({} as objArr);

  const {isApproval, tableHeader, tableRows, selectedContragent, isChartAccountReset} = state;

  const handleSaveButton = () => {
    dispatchPaymentConfirm();
    dispatchRaznosSave();
  };

  const isTableRowsValid = !!(Object.keys(tableRows)[0] || tableRows[0]);
  const isAmountValid = +tableHeader.amount.val;

  const error = (sumDelta === 0 || isChartAccountReset) ? '' : 'Error';

  const dispatchPaymentConfirm = async () =>
    await api.put(
      `banks-payment-to-contracts/payment-confirm/${ID as string}`,
      {'is_approval': 1}
    );

  const dispatchRaznosSave = async () => {
    let contragentId = 0;
    let apiHandler = 'raznos-save'; // сохранение разнесения когда не изменили контрагента через интерфейс

    if(selectedContragent) {
      contragentId = +selectedContragent;
      apiHandler = 'raznos-change-contragent'; // сохранение разнесения при изменении контрагента через интерфейс
    }

    if(isChartAccountReset) {
      apiHandler = 'raznos-chartaccount-reset'; // сохранение когда в поле "План счетов" выбрали "Прочие (76)"
    }

    await api.put(
      `banks-payment-to-contracts/${apiHandler}/${ID as string}`,
      {
        contragentId,
        contracts: sumArr,
      });

    navigate(-1);
  };

  useEffect(() => {
    const {Sum} = calcSum();
    setSumDelta(+(Sum - +tableHeader.amount.val).toFixed(2));
  },[sumArr]);

  useEffect(() => {
    const Arr: objArr = {};
    let Sum = 0;
    Object.values(tableRows).forEach(({id, amount}: TableRow) => {
      Arr[id] = +amount;
      Sum += +amount;
    });
    setSumArr(Arr);
    setSumDelta(+(+tableHeader.amount.val - Sum).toFixed(2));
  },[tableRows]);

  // вычислене массива сумм и общей их суммы
  const calcSum = () => {
    const Arr: objArr = {};
    let Sum = 0;
    Object.entries(sumArr).forEach(([id, amount]: [string, string | number]) => {
      Arr[id] = amount;
      Sum += +amount;
    });
    return {Sum, Arr};
  };

  return (
    <div>
      {isAmountValid ? (

        <div>
          {isTableRowsValid || isChartAccountReset ? (
            <div className="Grid-Table">
              {!isChartAccountReset && // при сбросе через План счетов ("Прочие (76)") - прячем таблицу с договорами
              <table>
                <GridHead isTableRowsValid={isTableRowsValid}/>
                <tbody>
                  <GridRow
                    sumArr={sumArr}
                    setSumArr={setSumArr}
                  />
                  <GridRowNotHovered
                    error={error}
                    sumDelta={sumDelta}
                    isTableRowsValid={isTableRowsValid}
                  />
                </tbody>
              </table>}
              <Buttons
                isApproval={isApproval}
                error={error}
                handleSaveButton={handleSaveButton}
              />
            </div>)
            :
            <div>
              {!isApproval && !isChartAccountReset &&
                <div className="No-Data Error">Нет необходимых данных для разнесения этого платежа</div>}
              <Button className="Cancel-Button" onClick={() => navigate(-1)}>
                Назад без сохранения
              </Button>
            </div>}

        </div>) : null}
    </div>
  );
};
