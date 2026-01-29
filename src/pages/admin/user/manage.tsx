import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnUserManage = cn('UserManage');

const UserManage: FC<IClassNameProps> = () => {
  return (
    <div className={cnUserManage()}>
      <h1>Управление клиентами</h1>
      <Grid url="users/manage" />
    </div>
  );
};

export default UserManage;
