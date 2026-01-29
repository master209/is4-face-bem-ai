import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import './InputLabel.scss';

export const cnInputLabel = cn('InputLabel');

export interface IInputLabelProps extends IClassNameProps {
  children: ReactNode;
}

export const InputLabel: FC<IInputLabelProps> = ({children, className}) => (
  <label className={classnames(cnInputLabel(), className)}>
    {children}
  </label>
);
