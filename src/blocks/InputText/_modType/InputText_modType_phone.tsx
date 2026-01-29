import React from 'react';
import { withBemMod } from '@bem-react/core';
import InputMask from 'react-input-mask'; // https://www.npmjs.com/package/react-input-mask

import { IInputTextProps } from '..';
import { Input } from '../../Input';
import { cnInputText } from '../InputText';
import { FormError, PHONE_LEN } from '../../../const';
import { capitalize, normPhone } from '../../../helpers';

/* eslint-disable */
export const withInputTextTypePhone = withBemMod<IInputTextProps>(
  cnInputText(),
  { modtype: 'phone' },
  () => ({
    useFormProps: {register, errors, getValues},
    name = 'phone',
    icon = 'phone',
    placeholder = 'Телефон',
    withLabel = false,
    withIcon = true,
    required = true,
    mask = '+7 999 999 9999',
    ...props
  }: IInputTextProps) => {
    const value = getValues()[name];

    // возвращает message для ошибки типа PhoneIncorrect
    const phoneIncorrectErrorMessage = () =>
      !!value && normPhone(value).substring(0,1) !== '9'
        ? FormError['PhoneIncorrect']
        : '';

    // возвращает message для ошибки типа PhoneTooShort
    const phoneTooShortErrorMessage = () =>
      !!value
      && normPhone(value).length > 0
      && normPhone(value).length < PHONE_LEN
        ? FormError['PhoneTooShort']
        : '';

    const validators = {
      required: FormError.Required,
      validate: {
        PhoneIncorrect: (val: string) => value && normPhone(val).substring(0,1) === '9',
        PhoneTooShort: (val: string) => value && normPhone(val).length === PHONE_LEN,
      }
    };

    return (
      <Input
        name={name}
        icon={icon}
        required={required}
        withLabel={withLabel}
        label={placeholder}
        withIcon={withIcon}
        error={
          errors.phone?.message
          || phoneIncorrectErrorMessage()
          || phoneTooShortErrorMessage()
        }
      >
        <InputMask
          {...register(name, validators)}
          className={cnInputText()}
          type="text"
          id={name}
          placeholder={withLabel ? '' : capitalize(placeholder)}
          mask={mask}
          {...props}
        />
      </Input>
    );
  }
);
