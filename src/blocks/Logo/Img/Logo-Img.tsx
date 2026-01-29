import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { Img } from '../../Img';
import { cnLogo } from '..';

export interface ILogoImgProps extends IClassNameProps {
  src: string;
  alt: string;
}

export const LogoImg: FC<ILogoImgProps> = ({src, alt}) => (
  <Img
    src={src}
    alt={alt}
    className={cnLogo('Img')}
  />
);
