export interface IField {
  key: string;
  lab: string;
  val: string | number;
  diff?: boolean;
}

export interface IButton {
  id: string;
  lab: string;
  handlerUrl: string;
  payload?: string;
}

export interface ILink {
  lab: string;
  url: string;
}

export interface IColumn {
  key: string;
  lab: string;
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