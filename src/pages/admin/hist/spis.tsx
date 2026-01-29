import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnHistSpis = cn('HistSpis');

const HistSpis: FC<IClassNameProps> = () => {
  return (
    <div className={cnHistSpis()}>
      <h1>История списаний средств</h1>
      <Grid url="admin/hist-spis" />
    </div>
  );
};

export default HistSpis;
