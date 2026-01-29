import React, { FC, MouseEvent, ReactNode } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Button } from '../Button';

import './SubmitButton.scss';

export interface ISubmitButtonProps extends IClassNameProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (ev: MouseEvent) => void;
}

export const cnSubmitButton = cn('SubmitButton');

export const SubmitButton: FC<ISubmitButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Button
    type="submit"
    className={cnSubmitButton(null)}
    {...props}
  >
    {children}
  </Button>
);
