import { State } from '../../types/common';
import { NameSpace } from '../../const';

export const getActiveHeaderMenuId = (state: State): string => state[NameSpace.Main].activeHeaderMenuId;
export const getActivePageMenu = (state: State): {id:string; link: string} => state[NameSpace.Main].activePageMenu;
