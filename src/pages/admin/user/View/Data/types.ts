export interface IField {
  key: string;
  label: string;
  value: string | number;
  diff?: boolean;
}

export interface IButton {
  id: string;
  label: string;
  handlerUrl: string;
  payload?: string;
}

export interface ILink {
  label: string;
  url: string;
}

export interface IColumn {
  key: string;
  label: string;
}

export interface ITableRow {
  id?: string;
  [key: string]: string | number | null | undefined;
}

export interface IDiffItem {
  lab: string;
  is: string;
  lk: string;
}

export type DataType = 'fields' | 'table' | 'diff';

export interface IDataConfig {
  id: string;
  name: string;
  type: DataType;
  fields?: IField[];
  columns?: IColumn[];
  rows?: ITableRow[];
  diffData?: IDiffItem[];
  buttons?: IButton[];
  links?: ILink[];
}