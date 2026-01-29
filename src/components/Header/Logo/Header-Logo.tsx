import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { Logo } from '../../../blocks/Logo';
import { cnHeader } from '..';
import { IMG_PATH } from '../../../const';

export const HeaderLogo: FC<IClassNameProps> = (props) => (
  <div className={cnHeader('Logo')} {...props}>
    <Logo
      src={`${IMG_PATH}logo.png`}
      handleClick={() => {}}
    />
  </div>
);
