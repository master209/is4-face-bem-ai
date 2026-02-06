import React, { useState, useRef, useCallback } from 'react';
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
  () => ({ src, alt, href, tip, onClick, className, ...props }: IIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const handleMouseEnter = useCallback(() => setVisible(true), []);
    const handleMouseLeave = useCallback(() => setVisible(false), []);

    return (
      <div
        ref={ref}
        className={cnIcon(null, [className, 'desktop'])}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <Link
          className="Link_iconLink"
          href={href || '#'}
          handleClick={onClick}
        >
          <Img
            src={src}
            alt={alt}
            className="Img_iconImg"
          />
        </Link>
        {tip && (
          <Tooltip theme="light" view="default" size="m" anchor={ref} visible={visible}>
            {tip}
          </Tooltip>
        )}
      </div>
    );
  }
);
