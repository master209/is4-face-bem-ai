import React, { useState, useRef } from 'react';
import { withBemMod } from '@bem-react/core';
import { Tooltip } from '../../../lib/yandex-ui/Tooltip';

import { cnIcon, IIconProps } from '..';
import { Link} from '../../Link';
import { Img } from '../../Img';

export interface IIconTypeLinkProps {
  type?: 'link';
  href?: string;
}

export const withIconTypeLink = withBemMod<IIconTypeLinkProps, IIconProps>(
  cnIcon(),
  {type: 'link'},
  // eslint-disable-next-line react/display-name
  () => ({
    src,
    alt,
    href,
    tip,
    onClick,
    className,
    // _@ts-ignore
    // type: _type,
    ...props
  }: IIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    return (
      <div
        ref={ref}
        className={cnIcon(null, [className, 'desktop'])}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        {...props}
      >
        <Link
          href={href || '#'}
          handleClick={onClick}
        >
          <Img
            src={src}
            alt={alt}
          />
        </Link>
        {tip &&
          <Tooltip view="default" size="m" anchor={ref} visible={visible}>
            {tip}
          </Tooltip>}
      </div>
    );
  }
);
