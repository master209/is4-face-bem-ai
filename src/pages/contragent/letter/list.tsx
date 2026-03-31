import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnLetterList = cn('LetterList');

const LetterList: FC<IClassNameProps> = () => {
  return (
    <div className={cnLetterList()}>
      <h1>Письма</h1>
      <Grid url="letter" />
    </div>
  );
};

export default LetterList;
