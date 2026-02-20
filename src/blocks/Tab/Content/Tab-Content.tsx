import React, { FC } from 'react';
import { cnTab } from '../types';

interface ITabContentProps {
  active: boolean;
  children: React.ReactNode;
}

export const TabContent: FC<ITabContentProps> = ({
  active,
  children
}) => {
  return (
    <div className={cnTab('Content', {active})}>
      {children}
    </div>
  );
};