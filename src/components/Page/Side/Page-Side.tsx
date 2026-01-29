import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnPage} from '..';

import './Page-Side.scss';

export const PageSide: FC<IClassNameProps> = () => (
  <div className={cnPage('Side')}>
    <div>PageSide</div>
  </div>
);
