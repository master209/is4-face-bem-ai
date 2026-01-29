import React, { FC, useState, useRef } from 'react';
import { Tooltip } from '../../lib/yandex-ui/Tooltip';

import { cnIcon, IIconProps } from '.';
import { Img } from '../Img';

import './Icon.scss';

export const Icon: FC<IIconProps> = ({
  src,
  alt,
  tip,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  return (
    <div
      ref={ref}
      className={cnIcon(null, [className])}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      {...props}
    >
      <Img src={src} alt={alt}/>
      {tip &&
        <Tooltip view="default" size="m" anchor={ref} visible={visible}>
          {tip}
        </Tooltip>}
    </div>
  );
};
