import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import {
  RaznosStateContext,
  Status,
  AutoComplete,
  dispatchLoadTableRows,
  dispatchSetSelectedContragent
} from '..';

import { api } from '../../../../../store';

import './Grid-Header.scss';

export const GridHeader: FC<IClassNameProps> = () => {
  const {state, dispatch} = useContext(RaznosStateContext);
  const {isApproval, tableHeader, isChartAccountReset} = state;

  const dispatchContractsByContragent = (selectedContragent: string) => {
    dispatch &&
      dispatchLoadTableRows(dispatch, {api, req:`banks-payment-to-contracts/contracts-by-contragent/${selectedContragent}`});
    dispatch &&
      dispatchSetSelectedContragent(dispatch, selectedContragent);
  };

  const status:Status = {
    class: isApproval ? 'Badge-On' : 'Badge-Off',
    name: isApproval ? 'сверено' : 'не сверено'
  };

  const renderACfield = (
    field: string,
    val: string,
    apiHandler: string,
    contractsByContragent: ((selectedContragent:string) => void) | (() => undefined),
    className = '',
    dropdown = false
  ) => (
    <AutoComplete
      ACfield={field}
      linkText={val}
      apiHandler={apiHandler}
      dispatchContractsByContragent={contractsByContragent}
      className={className}
      dropdown={dropdown}
    />
  );

  const renderHeaderItem = (key: string, val: string) => {
    switch (key) {
      case 'chart_account_id':
        return !isApproval
          ? renderACfield(
            'chartAccount',
            val,
            'chart-account-list',
            () => undefined,
            'ChartAccounts-List',
            true)
          : val;
      case 'contragent':
        return !isApproval && !isChartAccountReset
          ? renderACfield(
            'contragent',
            val,
            'contragents-list',
            dispatchContractsByContragent)
          : val;
      default:
        return val;
    }
  };

  return (
    <div>
      {+tableHeader.amount.val ? (
        <div className="Grid-Header">
          <p>
            Статус:&nbsp;
            <span className={`Badge ${status.class}`}>
              {status.name}
            </span>
          </p>
          {Object.entries(tableHeader as object).map(([key, {lab, val}]) => (
            <p key={key} className="">
              {lab}: {renderHeaderItem(key, val as string)}
            </p>
          ))}
        </div>) : <p>загружаю...</p>}
    </div>
  );
};
