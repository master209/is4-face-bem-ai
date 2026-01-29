import React, { FC, ButtonHTMLAttributes } from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';

const cnButton = cn('Button');

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'm';
  view?: 'default';
}

const ButtonComponent: FC<IButtonProps> = ({
  size = 'm',
  view = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cnButton({ size, view }, [className])}
      {...props}
    >
      {children}
    </button>
  );
};

// Modifiers for @bem-react/core compatibility
export const withSizeM = (Component: FC<any>) => (props: any) => (
  <Component {...props} size="m" />
);

export const withViewDefault = (Component: FC<any>) => (props: any) => (
  <Component {...props} view="default" />
);

export const Button = ButtonComponent;