import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './InputLabel.scss';

export const cnInputLabel = cn('InputLabel');

export interface IInputLabelProps extends IClassNameProps {
  children: ReactNode;
  id: string;
  labelClass?: string;
}

export const InputLabel: FC<IInputLabelProps> = ({children, id, labelClass}) => (
  <label
    className={cnInputLabel(null, [labelClass])}
    htmlFor={id}
  >
    {children}
  </label>
);
