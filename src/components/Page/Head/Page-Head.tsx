import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnPage} from '..';

import './Page-Head.scss';

export const PageHead: FC<IClassNameProps> = () => (
  <div className={cnPage('Head')}>
    PageHead
  </div>
);
