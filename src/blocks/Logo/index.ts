import { MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface ILogoProps extends IClassNameProps {
  src?: string;
  alt?: string;
  href?: string;
  handleClick: (ev: MouseEvent) => void;
}

export const cnLogo = cn('Logo');

export { Logo } from './Logo';
export { LogoLabel } from './Label/Logo-Label';

