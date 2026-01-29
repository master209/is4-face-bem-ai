import { withBemMod } from '@bem-react/core';

import { cnAlert } from '../AlertBase';
import { IAlertProps } from '..';

export const withAlertTypeSuccess = withBemMod<IAlertProps>(
  cnAlert(),
  {type: 'success'},
);

