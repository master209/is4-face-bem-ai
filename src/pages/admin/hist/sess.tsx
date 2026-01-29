import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnHistSess = cn('HistSess');

const HistSess: FC<IClassNameProps> = () => {
  return (
    <div className={cnHistSess()}>
      <h1>История сессий</h1>
      <Grid url="admin/hist-sess" />
    </div>
  );
};

export default HistSess;
