import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnContractList = cn('ContractList');

const ContractList: FC<IClassNameProps> = () => {
  return (
    <div className={cnContractList()}>
      <h1>Договоры</h1>
      <Grid url="contract" />
    </div>
  );
};

export default ContractList;
