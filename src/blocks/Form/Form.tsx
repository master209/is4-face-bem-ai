import { FC, ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { FormSubmit } from './Submit/Form-Submit';

import './Form.scss';

export const cnForm = cn('Form');

interface IFormProps<T extends Record<string, unknown> = Record<string, unknown>> {
  className?: string;
  children: ReactNode;
  action?: string;
  method?: string;
  onSubmit: SubmitHandler<T>;
  handleSubmit: (onValid: SubmitHandler<T>) => (e?: React.BaseSyntheticEvent) => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

export const Form = <T extends Record<string, unknown> = Record<string, unknown>>(props: IFormProps<T>) => {
  const {
    className,
    children,
    action,
    onSubmit,
    handleSubmit,
    submitLabel,
    submitDisabled,
    ...restProps
  } = props;

  return (
    <form
      className={cnForm(null, [className])}
      action={action || '#'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      <FormSubmit submitLabel={submitLabel} submitDisabled={submitDisabled} {...restProps} />
    </form>
  );
};
