import { withBemMod } from '@bem-react/core';

import { cnAlert } from '../AlertBase';
import { IAlertProps } from '..';

export const withAlertTypeInfo = withBemMod<IAlertProps>(
  cnAlert(),
  {type: 'info'},
);

