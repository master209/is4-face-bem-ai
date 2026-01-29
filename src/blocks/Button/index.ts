import { MouseEvent, ElementType, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';

export interface IButtonProps extends IClassNameProps {
  as?: ElementType;
  type?: 'link' | 'submit';
  href?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (ev: MouseEvent) => void;
}

export { cnButton, Button } from './Button';
export { withButtonTypeLink } from './_type/Button_type_link';
