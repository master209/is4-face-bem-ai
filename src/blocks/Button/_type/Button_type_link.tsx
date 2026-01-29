import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IButtonProps, cnButton } from '..';

export const withButtonTypeLink = withBemMod<IButtonProps>(
  cnButton(),
  { type: 'link' },
  // eslint-disable-next-line react/display-name
  (Button) => (props: IButtonProps) => <Button {...props} as="a" />,
);
