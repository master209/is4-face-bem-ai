import { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Icon } from '../Icon';
import { InputHelp } from '../InputHelp';
import { InputLabel as Label } from '../InputLabel';
import { IMG_PATH } from '../../const';

import './Input.scss';


interface IInputProps extends IClassNameProps {
  children: ReactNode;
  name: string;
  icon?: string;
  required?: boolean;
  withLabel?: boolean; // лейбл перед инпутом
  withLabelEnd?: boolean; // лейбл после инпута
  hasPasswEye?: boolean; // есть ли компонент глазик для просмотра пароля
  passwEyeComponent?: ReactNode; // компонент глазик для просмотра пароля
  withIcon?: boolean; // с иконкой на текстовом инпуте слева?
  label?: string | ReactNode;
  error?: string;
}

export const cnInput = cn('Input');

export const Input: FC<IInputProps> = ({
  children,
  className,
  name,
  icon,
  required = false,
  withLabel = false,
  withLabelEnd = false,
  hasPasswEye = false,
  passwEyeComponent,
  withIcon = true,
  label = '',
  error = '',
}) => (
  <div className={cnInput({
    required,
    withIcon,
    withLabel,
    withLabelEnd,
    hasPasswEye,
    hasError: !!error
  }, [className])}
  >
    <div className={cnInput('Wrap')}>
      {withLabel && <Label>{label}</Label>}
      {withIcon && icon &&
        <Icon
          src={`${IMG_PATH}${icon}.svg`}
          alt={icon}
          className="InputIcon"
        />}
      {children}
      {withLabelEnd && <Label>{label}</Label>}
      {hasPasswEye && passwEyeComponent}
    </div>
    {!!error && <InputHelp>{error}</InputHelp>}
  </div>
);
