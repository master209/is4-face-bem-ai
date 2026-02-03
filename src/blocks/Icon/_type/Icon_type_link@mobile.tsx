import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnIcon, IIconProps } from '..';
import { Link } from '../../Link';
import { Img } from '../../Img';

export interface IIconTypeLinkProps {
  type?: 'link';
  href?: string;
}

export const withIconTypeLink = withBemMod<IIconTypeLinkProps, IIconProps>(
  cnIcon(),
  {type: 'link'},
  () => ({ src, alt, href, onClick, className, ...props }: IIconProps) => (
    <div
      {...props}
      className={cnIcon(null, [className, 'mobile'])}
    >
      <Link
        href={href || '#'}
        handleClick={onClick}
      >
        <Img src={src} alt={alt} />
      </Link>
    </div>
  )
);
