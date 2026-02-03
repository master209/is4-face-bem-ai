// Типы для компонента Grid
import type { AxiosInstance } from 'axios';

export type IGridRow = {
  id: string;
  [key: string]: string;
}

export type OnRowDblClick = {
  navigate: string;
  apiHandler: string; // API-роут обработчика
  row: IGridRow;
}

export type TableFilterItems = {
  [key: string]: {
    type: string;
    data: {
      [key: string]: string;
    };
  };
}

export type TableHeadItems = {
  [key: string]: {
    lab: string;
    notSortable?: boolean;
    hidden?: boolean;
  };
}

export type TableSummaryItems = {
  [key: string]: string;
}

export type InputSettings = {
  type: string;
  apiHandler: string;
  settings: {
    condition: {
      key: string;
      val: string;
      cond: string;
    };
  };
}

export type Inputs = {
  [key: string]: InputSettings;
}

export type RowActions = {
  [key: string]: {
    action: string;
    apiHandler: string;
    icon?: string;
  };
}

export interface RequestProps {
  api: AxiosInstance;
  req: string;
  data?: string | object;
}
