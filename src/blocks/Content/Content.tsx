import React, { FC } from 'react';

import { cnContent, IContentProps } from '.';

import './Content.scss';

export const Content: FC<IContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cnContent(null, [className])}
  >
    {children}
  </div>
);
