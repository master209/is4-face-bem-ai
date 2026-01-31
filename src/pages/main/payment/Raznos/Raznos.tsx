import React, { FC, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { Layout } from '../../../../components';
import { OnRowDblClick } from '../../../../blocks/Grid';
import { IGridRow } from '../../../../types/common';
import {
  RaznosStateContext,
  GridHeader,
  GridTable,
  dispatchLoadData,
  useAsReducer
} from '.';

import { api } from '../../../../store';

import './Raznos.scss';

const PaymentRaznos: FC<IClassNameProps> = () => {
  const {state, dispatch} = useAsReducer();

  const {id: ID} = useParams();
  const location = useLocation();
  const navigate = useNavigate();

/*   const loadData = () => {
    if(location.state) {
      const {apiHandler} = location.state as OnRowDblClick;
      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    } else { // обработка перехода по прямой ссылке
      navigate('/main/payment/in');
    }
  };
 */
  const loadData = () => {
    // Проверяем данные в sessionStorage (для переходов через двойной клик)
    const sessionState = sessionStorage.getItem('gridRowViewState');
    console.log('🔍 Raznos loadData, sessionState:', sessionState);

    if (sessionState) {
      const {apiHandler, row} = JSON.parse(sessionState) as OnRowDblClick & {row: IGridRow};
      console.log('✅ Raznos has sessionState. apiHandler, row:', apiHandler, row);

      // Очищаем sessionStorage после использования
      sessionStorage.removeItem('gridRowViewState');
      console.log('🧹 SessionStorage cleared');

      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    } else {
      // Если нет state, это прямой переход по URL - просто показываем страницу без API запроса
      console.log('ℹ️ Raznos no state - direct URL access');
      // navigate('/admin/users/manage');
    }
  };

  useEffect(() => {
    console.log('🏗️ Raznos mounted, calling loadData');
    loadData();
  },[]);

  return (
    <Layout>
      <RaznosStateContext.Provider value={{state, dispatch}}>
        <div className="PaymentRaznos">
            <h1>Разнесение платежа #{ID}</h1>
            <div>
              <GridHeader/>
              <GridTable/>
            </div>
        </div>
      </RaznosStateContext.Provider>
    </Layout>
  );
};

export default PaymentRaznos;
