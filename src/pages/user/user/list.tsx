import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Grid } from '../../../blocks/Grid';

export const cnUserList = cn('UserList');

const UserList: FC<IClassNameProps> = () => {
  return (
    <div className={cnUserList()}>
      <h1>Сотрудники</h1>
      <Grid url="users" />
    </div>
  );
};

export default UserList;
