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
  holderText = 'файл не выбран',
  view,
  size,
  name,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `xuniq-${Math.random().toString(36).substr(2, 9)}`;

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  return (
    <span className={cnAttach(null, [className])}>
      <span
        aria-label={buttonText}
        tabIndex={0}
        className={`Button2 Button2_size_m Button2_view_default Attach-Button`}
        role="button"
        onClick={handleButtonClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleButtonClick();
          }
        }}
      >
        <span className="Button2-Text">{children || buttonText}</span>
        <input
          ref={inputRef}
          autoComplete="off"
          className="Attach-Control"
          id={uniqueId}
          name="file"
          tabIndex={-1}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
        />
      </span>
      {hasHolder && (
        <span aria-hidden="true" className="Attach-Holder">
          <label className="Attach-Text" htmlFor={uniqueId}>
            {holderText}
          </label>
        </span>
      )}
    </span>
  );
};