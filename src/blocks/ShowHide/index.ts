import { ReactNode } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface IShowHideProps extends IClassNameProps {
  children: ReactNode;
  label?: string;
  isShowExtdata?: boolean; // показывать данные для доступа?
}

export const cnShowHide = cn('ShowHide');
export { ShowHide } from './ShowHide';

