import { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { classnames } from '@bem-react/classnames';

import './FormInfo.scss';

interface IFormInfoProps extends IClassNameProps {
  children: ReactNode;
}

export const FormInfo: FC<IFormInfoProps> = ({
  className,
  children,
  ...props
}) => (
  <p className={classnames('FormInfo', className)} {...props}>{children}</p>
);
