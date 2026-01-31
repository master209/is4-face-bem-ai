import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

export const cnHistTariff = cn('HistTariff');

const HistTariff: FC<IClassNameProps> = () => (
  <div className={cnHistTariff()}>
    <Helmet>
      <title>{TITLE_FREFIX}История тарифов</title>
    </Helmet>
    <h1>История тарифов</h1>
    <Grid url="admin/hist-tariff" />
  </div>
);

export default HistTariff;
