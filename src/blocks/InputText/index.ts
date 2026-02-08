import { IClassNameProps } from '@bem-react/core';

import {AuthData} from '../../types/user-data';
import {
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
  UseFormGetValues
} from 'react-hook-form';

export enum InputAutoComplete {
  On = 'on',
  Off = 'off'
}
export type InputAComplete = InputAutoComplete.On | InputAutoComplete.Off;

/* eslint-disable */
type UseFormProps = {
  register: UseFormRegister<any>
  errors: FieldErrors<AuthData>;
  getValues: UseFormGetValues<any>;
};

export interface IInputTextProps extends IClassNameProps {
  useFormProps: UseFormProps;
  name?: string;
  type?: string;
  icon?: string;
  placeholder?: string; // если не задано св-во withLabel, то по умолчанию - плейсхолдер
  withLabel?: boolean; // если true, то лейбл вместо плейсхолдера
  labelClass?: string;
  withIcon?: boolean; // с иконкой на текстовом инпуте слева?
  required?: boolean;
  autocomplete?: InputAComplete;
  validators?: RegisterOptions<any> | undefined;
  error?: string;
  modtype?: string; // тип модификатора, напр - 'phone', 'password'
  mask?: string; // шаблон для маскированного ввода (напр телефона)
}

export { InputText } from './InputText';
export { withInputTextTypePhone } from './_modType/InputText_modType_phone';
export { withInputTextTypePassword } from './_modType/InputText_modType_password';
export { withInputTextTypePasswordAuth } from './_modType/InputText_modType_passwordAuth';
export { withInputTextTypeSmsCode } from './_modType/InputText_modType_smsCode';
