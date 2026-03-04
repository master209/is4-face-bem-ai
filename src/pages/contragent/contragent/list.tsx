import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnContragentList = cn('ContragentList');

const ContragentList: FC<IClassNameProps> = () => {
  return (
    <div className={cnContragentList()}>
      <h1>Контрагенты</h1>
      <Grid url="contragent" />
    </div>
  );
};

export default ContragentList;
