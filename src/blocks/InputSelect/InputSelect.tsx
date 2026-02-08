import { FC, ReactNode, ChangeEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Input } from '../Input';

import './InputSelect.scss';

export const cnInputSelect = cn('InputSelect');

export interface IInputSelectProps extends IClassNameProps {
  children: ReactNode;
  label: string;
  name: string;
  value: string;
  handleChange: (ev: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

export const InputSelect: FC<IInputSelectProps> = ({
  children,
  label,
  className,
  name,
  value,
  handleChange,
  required = false,
}) => (
  <Input
    name={name}
    required={required}
    label={label}
    withLabel
  >
    <select
      className={cnInputSelect(null, [className && `${className}Items`])}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {children}
    </select>
  </Input>
);
