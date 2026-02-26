import { cn } from '@bem-react/classname';
import { IUniversalTab } from '../Tab';

export const cnTabSet = cn('TabSet');

export interface ITabSetProps {
  tabs: IUniversalTab[];
  onTabChange?: (tabId: string) => void;
  className?: string;
}