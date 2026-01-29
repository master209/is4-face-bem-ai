import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';

import './Modal-Body.scss';

import { cnModal } from '..';

export interface IModalBodyProps extends IClassNameProps {
  children: ReactNode;
}

export const ModalBody: FC<IModalBodyProps> = ({children}) => (
  <div className={cnModal('Body')}>
    {children}
  </div>
);
