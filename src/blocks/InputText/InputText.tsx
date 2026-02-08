import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Input } from '../Input';
import { IInputTextProps, InputAutoComplete } from '.';

import './InputText.scss';

export const cnInputText = cn('InputText');

export const InputText: FC<IInputTextProps> = ({
  useFormProps: {register},
  type,
  name,
  icon,
  placeholder,
  withLabel = false,
  labelClass,
  withIcon = true,
  required = false,
  autocomplete = InputAutoComplete.On,
  validators,
  error,
}) => {
  // Валидация обязательных пропсов
  if (!name || !placeholder) {
    console.warn('InputText: name and placeholder are required props');
    return null;
  }

  return (
    <Input
      name={name}
      icon={icon}
      required={required}
      withLabel={withLabel}
      withIcon={withIcon}
      label={withLabel ? placeholder : undefined}
      labelClass={withLabel ? labelClass : undefined}
      error={error}
    >
      <input
        {...register(name, validators)}
        className={cnInputText()}
        type="text"
        id={name}
        placeholder={withLabel ? '' : placeholder}
        autoComplete={autocomplete as InputAutoComplete}
        maxLength={30}
      />
    </Input>
  );
};
