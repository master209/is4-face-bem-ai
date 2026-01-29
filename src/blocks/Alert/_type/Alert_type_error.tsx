import { withBemMod } from '@bem-react/core';

import { cnAlert } from '../AlertBase';
import { IAlertProps } from '..';

export const withAlertTypeError = withBemMod<IAlertProps>(
  cnAlert(),
  {type: 'error'},
);

