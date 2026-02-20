import React, { FC, MouseEvent } from 'react';
import { cnTab } from '../types';

interface ITabLabelProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const TabLabel: FC<ITabLabelProps> = ({
  active,
  onClick,
  children
}) => {
  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    onClick();
  };

  return (
    <div
      className={cnTab('Label', {active})}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};