import React from 'react';

import { IAlertProps } from '.';
import { AlertBase } from './AlertBase';
import { withAlertTypeInfo } from './_type/Alert_type_info';
import { withAlertTypeSuccess } from './_type/Alert_type_success';
import { withAlertTypeError } from './_type/Alert_type_error';

const AlertTypeInfo = withAlertTypeInfo(AlertBase);
const AlertTypeSuccess = withAlertTypeSuccess(AlertBase);
const AlertTypeError = withAlertTypeError(AlertBase);

// Основной компонент Alert (по умолчанию info)
export function Alert({children, type = 'info', ...props}: IAlertProps): JSX.Element {
  switch (type) {
    case 'success':
      return <AlertTypeSuccess {...props}>{children}</AlertTypeSuccess>;
    case 'error':
      return <AlertTypeError {...props}>{children}</AlertTypeError>;
    case 'info':
    default:
      return <AlertTypeInfo {...props}>{children}</AlertTypeInfo>;
  }
}

// Отдельные компоненты для явного использования
export const AlertInfo = AlertTypeInfo;
export const AlertSuccess = AlertTypeSuccess;
export const AlertError = AlertTypeError;
