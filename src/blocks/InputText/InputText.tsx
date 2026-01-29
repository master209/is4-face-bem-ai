import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input';
import { IInputTextProps, InputAutoComplete } from '.';
import { capitalize } from '../../helpers';

import './InputText.scss';

export const cnInputText = cn('InputText');

export const InputText: FC<IInputTextProps> = ({
  useFormProps: {register},
  type,
  name,
  icon,
  placeholder,
  withLabel = false,
  withIcon = true,
  required = false,
  autocomplete = InputAutoComplete.On,
  validators,
  error,
}) => name && placeholder ? (
  <Input
    name={name}
    icon={icon}
    required={required}
    withLabel={withLabel}
    withIcon={withIcon}
    label={placeholder}
    error={error}
  >
    <input
      {...register(name, validators as object) as object}
      className={cnInputText()}
      type="text"
      id={name}
      placeholder={withLabel ? '' : capitalize(placeholder)}
      autoComplete={autocomplete as InputAutoComplete}
      maxLength={30}
    />
  </Input>) : null;
