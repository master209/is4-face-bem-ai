import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { Button } from '../../../../../../blocks/Button';

import './Buttons.scss';

export interface IButtonsProps extends IClassNameProps {
  isApproval: boolean;
  error: string;
  handleSaveButton: () => void;
}

export const Buttons: FC<IButtonsProps> = ({isApproval, error, handleSaveButton}) => {
  const navigate = useNavigate();

  return (
    <div className="Form-Buttons">
      {!isApproval ?
        <Button
          className="Save-Button"
          onClick={handleSaveButton}
          disabled={!!error}
        >
          Сохранить как сверено
        </Button> : null}
      <Button
        className="Cancel-Button"
        onClick={() => navigate(-1)}
      >
        Назад без сохранения
      </Button>
    </div>
  );
};
