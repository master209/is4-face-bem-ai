import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

const cnPaymentUploadsRemoving = cn('PaymentUploadsRemoving');

const PaymentUploadsRemoving: FC<IClassNameProps> = () => {
  return (
    <div className={cnPaymentUploadsRemoving()}>
      <Helmet>
        <title>{TITLE_FREFIX}Удаление загруженных выгрузок</title>
      </Helmet>
      <h1>Удаление загруженных выгрузок</h1>
      <Grid url="banks-payment-log" />
    </div>
  );
};

export default PaymentUploadsRemoving;
