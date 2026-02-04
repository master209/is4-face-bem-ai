import React, { useState } from 'react';
import { withBemMod } from '@bem-react/core';

import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { IInputTextProps } from '..';
import { cnInputText } from '../InputText';

import { FormError, IMG_PATH, PASSW_MIN, PASSW_MAX, PASSW_REGEXP } from '../../../const';
import { capitalize } from '../../../helpers';

/* eslint-disable */
export const withInputTextTypePassword = withBemMod<IInputTextProps>(
  cnInputText(),
  { modtype: 'password' },
  () => ({
    useFormProps: {register, errors, getValues},
    name = 'password',
    icon = 'password',
    placeholder = 'Пароль',
    withLabel = false,
    withIcon = true,
    required = true,
    validators,
    error,
    ...props
  }: IInputTextProps) => {
    const value = getValues()[name];

    const [isPasswEyeOpen, setIsPasswEyeOpen] = useState(false);
    const passwEyeIcon = isPasswEyeOpen ? 'eyeOpened' : 'eyeClosed';

    const handlePasswEyeClick = () => setIsPasswEyeOpen((prev) => !prev);

    const passwordTooShortErrorMessage = () =>
      !!value && value.length < PASSW_MIN
        ? FormError['PasswordTooShort']
        : '';

    const passwordTooLongErrorMessage = () =>
      !!value && value.length > PASSW_MAX
        ? FormError['PasswordTooLong']
        : '';

    const passwordTooSimpleMessage = () =>
      !!value && !PASSW_REGEXP.test(value)
        ? FormError['PasswordTooSimple']
        : '';

    // эти валидаторы будут ОБЪЕДИНЕНЫ с валидаторами из компонента
    const _validators = {
      required: required && FormError.Required, // пароль всегда обязателен
      validate: {
        PasswordTooShort: (val: string) => value && val.length >= PASSW_MIN, // пароль не менее PASSW_MIN символов
        PasswordTooLong: (val: string) => value && val.length <= PASSW_MAX,
        PasswordTooSimple: (val: string) => value && PASSW_REGEXP.test(val),
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
        withPasswEye={true}
        passwEyeComponent={(
          <Icon
            src={`${IMG_PATH}${passwEyeIcon}.svg`}
            alt="eye"
            tip={isPasswEyeOpen ? 'Скрыть пароль' : 'Показать пароль'}
            onClick={handlePasswEyeClick}
            className={`Icon_passwEye Icon_passwEye_${passwEyeIcon}`}
          />
        )}
        error=
          {errors.password?.message
          || passwordTooShortErrorMessage()
          || passwordTooLongErrorMessage()
          || passwordTooSimpleMessage()
          || error
        }
      >
        <input
          {...register(name, {...validators, ..._validators})} // локальные валидаторы сливаем с валидаторами из компонента
          className={cnInputText()}
          type={isPasswEyeOpen ? 'text' : 'password'}
          id={name}
          placeholder={withLabel ? '' : capitalize(placeholder)}
          {...props}
        />
      </Input>
    );
  }
);
