import { cn } from '@bem-react/classname';
import { ReactNode } from 'react';

export const cnTab = cn('Tab');

export interface IUniversalTab {
  id: string;
  lab: string;
  content: ReactNode;
}

export interface ITabProps {
  tab: IUniversalTab;
  active: boolean;
  onClick: () => void;
  className?: string;
}