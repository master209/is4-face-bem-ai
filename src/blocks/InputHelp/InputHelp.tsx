import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './InputHelp.scss';

export const cnInputHelp = cn('InputHelp');

export interface IInputHelpProps extends IClassNameProps {
  children: string;
}

export const InputHelp: FC<IInputHelpProps> = ({children, className}) => (
  <p className={cnInputHelp(null, [className])}>
    {children}
  </p>
);
