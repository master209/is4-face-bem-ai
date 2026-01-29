import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';

import './Modal-Buttons.scss';

import { cnModal } from '..';

export interface IModalButtonsProps extends IClassNameProps {
  children: ReactNode;
}

export const ModalButtons: FC<IModalButtonsProps> = ({children}) => (
  <div className={cnModal('Buttons')}>
    {children}
  </div>
);
