import React, { FC, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { Layout } from '../../../../components';
import { OnRowDblClick } from '../../../../blocks/Grid';
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

  const loadData = () => {
    if(location.state) {
      const {apiHandler} = location.state as OnRowDblClick;
      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    } else { // обработка перехода по прямой ссылке
      navigate('/main/payment/in');
    }
  };

  useEffect(() => {
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
