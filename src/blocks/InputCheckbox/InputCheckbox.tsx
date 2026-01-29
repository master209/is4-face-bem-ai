import React, { FC, ReactNode, ChangeEvent, MouseEvent } from 'react';
import { UseFormRegister, RegisterOptions} from 'react-hook-form';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Input } from '../Input';

import './InputCheckbox.scss';

export const cnCheckbox = cn('InputCheckbox');

/* eslint-disable */
export interface ICheckboxProps extends IClassNameProps {
  register?: UseFormRegister<any>;
  name: string;
  label?: string | ReactNode;
  withLabel?: boolean; // если true, то лейбл вместо плейсхолдера
  handleChange?: (ev: ChangeEvent, checked: boolean) => void;
  isChecked?: () => boolean;
  validators?: RegisterOptions<any> | undefined;
  error?: string;
}
/* eslint-enable */

export const InputCheckbox: FC<ICheckboxProps> = ({
  register,
  name,
  label,
  withLabel,
  handleChange,
  isChecked,
  validators,
  error,
  className,
}) => {
  const formRegister = register && {...register(name, validators as object) as object};

  return (
    <Input
      name={name}
      withLabelEnd={withLabel}
      label={label}
      error={error}
    >
      <input
        {...formRegister}
        className={cnCheckbox(null, [className])}
        id={name}
        type="checkbox"
        checked={isChecked && isChecked()}
        onChange={(ev: ChangeEvent) => handleChange && isChecked && handleChange(ev, isChecked())}
        onClick={(ev: MouseEvent) => ev.stopPropagation()}
      />
    </Input>
  );
};
