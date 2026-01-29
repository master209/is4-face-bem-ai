import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnHistTariff = cn('HistTariff');

const HistTariff: FC<IClassNameProps> = () => {
  return (
    <div className={cnHistTariff()}>
      <h1>История тарифов</h1>
      <Grid url="admin/hist-tariff" />
    </div>
  );
};

export default HistTariff;
