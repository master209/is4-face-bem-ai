import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IAlertProps } from '.';

import './Alert.scss';

export const cnAlert = cn('Alert');

export const AlertBase: FC<IAlertProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cnAlert(null, [className])}
  >
    {children}
  </div>
);
