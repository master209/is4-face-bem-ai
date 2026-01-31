import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

export const cnHistPay = cn('HistPay');

const HistPay: FC<IClassNameProps> = () => (
  <div className={cnHistPay()}>
    <Helmet>
      <title>{TITLE_FREFIX}История пополнений средств</title>
    </Helmet>
    <h1>История пополнений средств</h1>
    <Grid url="admin/hist-pay" />
  </div>
);

export default HistPay;
