import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface IImgProps extends IClassNameProps {
  src: string;
  alt: string;
}

export const cnImg = cn('Img');

export { Img } from './Img';
