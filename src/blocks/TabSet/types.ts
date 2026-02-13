import { ITabConfig, IButton, IField, ITableRow, IDiffItem } from '../Tab';

export interface ITabSetProps {
  tabs: ITabConfig[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onButtonClick?: (button: IButton) => void;
  className?: string;
}

// Re-export for convenience
export type { IField, ITableRow, IDiffItem };