import React, { FC } from 'react';
import { Button } from '../../Button';
import { cnTab, IButton } from '../types';

interface ITabButtonSetProps {
  buttons: IButton[];
  onButtonClick?: (button: IButton) => void;
}

export const TabButtonSet: FC<ITabButtonSetProps> = ({
  buttons,
  onButtonClick
}) => {
  return (
    <div className={cnTab('ButtonSet')}>
      {buttons.map((button) => (
        <div key={button.id} className={cnTab('ContentButton')}>
          <Button
            onClick={() => onButtonClick?.(button)}
          >
            {button.label}
          </Button>
        </div>
      ))}
    </div>
  );
};