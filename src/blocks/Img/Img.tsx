import React, { FC } from 'react';

import { cnImg, IImgProps } from '.';

export const Img: FC<IImgProps> = ({src, alt, className,}) => (
  <img
    src={src}
    alt={alt}
    className={cnImg(null, [className])}
  />
);
