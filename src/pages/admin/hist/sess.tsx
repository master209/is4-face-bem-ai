import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

export const cnHistSess = cn('HistSess');

const HistSess: FC<IClassNameProps> = () => {
  return (
    <div className={cnHistSess()}>
      <Helmet>
        <title>{TITLE_FREFIX}История сессий</title>
      </Helmet>
      <h1>История сессий</h1>
      <Grid url="admin/hist-sess" />
    </div>
  );
};

export default HistSess;
