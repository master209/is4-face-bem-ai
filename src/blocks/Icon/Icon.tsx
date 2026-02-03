import React, { FC, useState, useRef, useCallback } from 'react';
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

  const handleMouseEnter = useCallback(() => setVisible(true), []);
  const handleMouseLeave = useCallback(() => setVisible(false), []);

  return (
    <div
      ref={ref}
      className={cnIcon(null, [className])}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Img src={src} alt={alt}/>
      {tip && (
        <Tooltip theme="light" view="default" size="m" anchor={ref} visible={visible}>
          {tip}
        </Tooltip>
      )}
    </div>
  );
};
