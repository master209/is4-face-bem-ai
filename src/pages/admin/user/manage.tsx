import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet-async';

import {TITLE_FREFIX} from "../../../const";
import { Grid } from '../../../blocks/Grid';

export const cnUserManage = cn('UserManage');

const UserManage: FC<IClassNameProps> = () => (
  <div className={cnUserManage()}>
    <Helmet>
      <title>{TITLE_FREFIX}Управление клиентами</title>
    </Helmet>
    <h1>Управление клиентами</h1>
    <Grid url="user/manage" />
  </div>
);

export default UserManage;
