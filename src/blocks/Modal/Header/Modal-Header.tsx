import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';

import './Modal-Header.scss';

import { cnModal } from '..';

export interface IModalHeaderProps extends IClassNameProps {
  children: ReactNode;
}

export const ModalHeader: FC<IModalHeaderProps> = ({children}) => (
  <div className={cnModal('Header')}>
    {children}
  </div>
);
