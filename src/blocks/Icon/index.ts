import { MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface IIconProps extends IClassNameProps {
  src: string;
  alt: string;
  title?: string;
  type?: 'link';
  href?: string;
  tip?: string; // всплывающая подсказка для этой иконки
  onClick?: (ev: MouseEvent) => void;
}

export const cnIcon = cn('Icon');
export { Icon } from './Icon';
