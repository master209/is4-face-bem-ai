import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ILinkProps } from '..';

// через простой тег <a> (когда нужна перезагрузка страницы)
export const withLinkTypeA = withBemMod<ILinkProps>(
  'Link',
  { typeA: true },
  // eslint-disable-next-line react/display-name
  () => (props: ILinkProps) => <a {...props} />,
);
