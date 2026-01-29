import { ReactNode } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface IContentProps extends IClassNameProps {
  children: ReactNode;
}

export const cnContent = cn('Content');
export { Content } from './Content';

