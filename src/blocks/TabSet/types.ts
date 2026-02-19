import { cn } from '@bem-react/classname';
import { ITabConfig, IButton, IField, ITableRow, IDiffItem } from '../Tab';

export const cnTabSet = cn('TabSet');

export interface ITabSetProps {
  tabs: ITabConfig[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onButtonClick?: (button: IButton) => void;
  className?: string;
}

// Re-export for convenience
export type { IField, ITableRow, IDiffItem };