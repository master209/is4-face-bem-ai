import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnHistPay = cn('HistPay');

const HistPay: FC<IClassNameProps> = () => {
  return (
    <div className={cnHistPay()}>
      <h1>История пополнений средств</h1>
      <Grid url="admin/hist-pay" />
    </div>
  );
};

export default HistPay;
