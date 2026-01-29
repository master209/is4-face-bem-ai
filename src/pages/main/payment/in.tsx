import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { GridHeader } from './GridHeader';
import { Grid } from '../../../blocks/Grid';

const cnPaymentList = cn('PaymentList');

const PaymentIn: FC<IClassNameProps> = () => {
  return (
    <div className={cnPaymentList()}>
      <h1>Реестр входящих платежей</h1>
      <Grid url="banks-payment/in" Header={GridHeader} />
    </div>
  );
};

export default PaymentIn;
