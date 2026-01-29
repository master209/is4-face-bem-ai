import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

const cnPaymentUploadsRemoving = cn('PaymentUploadsRemoving');

const PaymentUploadsRemoving: FC<IClassNameProps> = () => {
  return (
    <div className={cnPaymentUploadsRemoving()}>
      <h1>Удаление загруженных выгрузок</h1>
      <Grid url="banks-payment-log" />
    </div>
  );
};

export default PaymentUploadsRemoving;
