import React from 'react';

import { IAlertProps } from '.';
import { AlertBase } from './AlertBase';
import { withAlertTypeInfo } from './_type/Alert_type_info';

const AlertTypeInfo = withAlertTypeInfo(AlertBase);

export function Alert({children}: IAlertProps): JSX.Element {
  return (
    <AlertTypeInfo type="info">
      {children}
    </AlertTypeInfo>
  );
}
