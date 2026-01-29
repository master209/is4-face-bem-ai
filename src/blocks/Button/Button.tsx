import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { IButtonProps } from '.';

import './Button.scss';

export const cnButton = cn('Button');

export const Button: FC<IButtonProps> = ({
  as: Component = 'button',
  children,
  className,
  // _@ts-ignore
  // type: _type,
  ...props
}) => (
  <div className={`${className || 'Button'}-Wrap`}>
    <Component
      className={cnButton(null, [className])}
      {...props}
    >
      {children}
    </Component>
  </div>
);
