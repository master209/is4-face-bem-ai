import { ReactNode } from 'react';

import { IClassNameProps } from '@bem-react/core';

export interface IAlertProps extends IClassNameProps {
  children: ReactNode;
  type?: string;
}

export { AlertBase } from './AlertBase';
export { Alert } from './Alert';
export { withAlertTypeInfo } from './_type/Alert_type_info';
export { withAlertTypeSuccess } from './_type/Alert_type_success';
export { withAlertTypeError } from './_type/Alert_type_error';

