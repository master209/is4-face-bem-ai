import { ITabConfig, IButton } from '../Tab';

export interface ITabSetProps {
  tabs: ITabConfig[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onButtonClick?: (button: IButton) => void;
  className?: string;
}