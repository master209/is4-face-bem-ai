import React, { FC } from 'react';
import { cnImg, IImgProps } from '.';

import './Img.scss';

export const Img: FC<IImgProps> = ({src, alt, className,}) => (
  <img
    src={src}
    alt={alt}
    className={cnImg(null, [className])}
  />
);
