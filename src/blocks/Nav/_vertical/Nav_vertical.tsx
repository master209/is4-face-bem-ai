import { withBemMod } from '@bem-react/core';

import { cnNav, INavProps } from '..';

export const withNavVertical = withBemMod<INavProps>(
  cnNav(),
  {vertical: true},
);

