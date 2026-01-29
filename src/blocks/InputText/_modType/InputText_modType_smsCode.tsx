import React from 'react';
import { withBemMod } from '@bem-react/core';
import InputMask from 'react-input-mask'; // https://www.npmjs.com/package/react-input-mask

import { IInputTextProps } from '..';
import { Input } from '../../Input';
import { cnInputText } from '../InputText';
import { SMS_CODE_LEN } from '../../../const';
import { normSmsCode } from '../../../helpers';

import './InputText_modType_smsCode.scss';

/* eslint-disable */
export const withInputTextTypeSmsCode = withBemMod<IInputTextProps>(
  cnInputText(),
  { modtype: 'smsCode' },
  () => ({
    useFormProps: {register, errors, getValues},
    name = 'smsCode',
    required = true,
    mask = '9 9 9 9 9',
    ...props
  }: IInputTextProps) => {
    const value = getValues()[name];

    const codeTooShortErrorMessage = (val:string) =>
      val.length > 0 && val.length < SMS_CODE_LEN
        ? 'Введите код полностью'
        : '';

    const validators = {
      required: 'Введите код',
      validate: {
        CodeTooShort: (val: string) => normSmsCode(val).length === SMS_CODE_LEN,
      }
    };

    return (
      <Input
        name={name}
        required={false}
        withIcon={false}
        className="Input_SmsCode"
        error={
          errors.smsCode?.message
          || codeTooShortErrorMessage(normSmsCode(value))
        }
      >
        {React.createElement(InputMask as any, {
          ...register(name, validators),
          className: cnInputText(),
          type: "text",
          id: name,
          mask,
          ...props,
        })}
      </Input>
    );
  }
);
