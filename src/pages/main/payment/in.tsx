import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { GridHeader } from './GridHeader';
import { Grid } from '../../../blocks/Grid';

const cnPaymentList = cn('PaymentList');

const PaymentIn: FC<IClassNameProps> = () => (
  <div className={cnPaymentList()}>
    <Helmet>
      <title>{TITLE_FREFIX}Реестр входящих платежей</title>
    </Helmet>
    <h1>Реестр входящих платежей</h1>
    <Grid url="banks-payment/in" Header={GridHeader} />
  </div>
);

export default PaymentIn;
