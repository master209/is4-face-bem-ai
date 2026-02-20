import React, { FC } from 'react';
import { cnTab } from '../types';

interface ITabFieldLabelProps {
  children: React.ReactNode;
}

export const TabFieldLabel: FC<ITabFieldLabelProps> = ({
  children
}) => {
  return (
    <span className={cnTab('FieldLabel')}>
      {children}:
    </span>
  );
};