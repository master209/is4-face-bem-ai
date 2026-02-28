import React, { FC } from 'react';
import { Button } from '../../../../../../blocks/Button';
import { cnData } from '../Data';
import { IButton } from '../types';

export interface IDataButtonSetProps {
  buttons: IButton[];
  onButtonClick?: (button: IButton) => void;
}

export const DataButtonSet: FC<IDataButtonSetProps> = ({
  buttons,
  onButtonClick
}) => {
  return (
    <div className={cnData('ButtonSet')}>
      {buttons.map((button) => (
        <div key={button.id} className={cnData('ContentButton')}>
          <Button
            onClick={() => onButtonClick?.(button)}
          >
            {button.lab}
          </Button>
        </div>
      ))}
    </div>
  );
};