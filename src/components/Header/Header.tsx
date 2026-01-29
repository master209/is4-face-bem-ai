import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { useRegistry } from '@bem-react/di';

import { cnHeader, HeaderIcons } from '.';

import './Header.scss';

export const Header: FC<IClassNameProps> = ({className, ...props}) => {
  const { HeaderLogo } = useRegistry(cnHeader());

  return (
    <div
      {...props}
      className={cnHeader({}, [className])}
    >
      <HeaderLogo/>
      <HeaderIcons/>
    </div>
  );
};
