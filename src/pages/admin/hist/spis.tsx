import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

export const cnHistSpis = cn('HistSpis');

const HistSpis: FC<IClassNameProps> = () => (
  <div className={cnHistSpis()}>
    <Helmet>
      <title>{TITLE_FREFIX}История списаний средств</title>
    </Helmet>
    <h1>История списаний средств</h1>
    <Grid url="admin/hist-spis" />
  </div>
);

export default HistSpis;
