import React, { FC, ChangeEvent, useRef } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import './Attach.scss';

const cnAttach = cn('Attach');

export interface IAttachProps extends IClassNameProps {
  children?: React.ReactNode;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonText?: string;
  hasHolder?: boolean;
  hasIcon?: boolean;
  holderText?: string;
  view?: string;
  size?: string;
  name?: string;
}

export const Attach: FC<IAttachProps> = ({
  children,
  multiple = false,
  accept,
  disabled = false,
  onChange,
  buttonText = 'Выбрать файл',
  hasHolder = true,
  hasIcon = true,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  return (
    <div className={cnAttach(null, [className])}>
      {hasHolder ? (
        <div className={cnAttach('Holder')}>
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={disabled}
            className={cnAttach('Button')}
          >
            {hasIcon && <span className={cnAttach('Icon')}>📎</span>}
            {children || buttonText}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={disabled}
          className={cnAttach('Button')}
        >
          {hasIcon && <span className={cnAttach('Icon')}>📎</span>}
          {children || buttonText}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};