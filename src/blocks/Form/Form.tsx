import { FC, ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { FormSubmit } from './Submit/Form-Submit';

import './Form.scss';

export const cnForm = cn('Form');

interface IFormProps extends IClassNameProps {
  children: ReactNode;
  action?: string;
  method?: string;
  /* eslint-disable */
  onSubmit: SubmitHandler<any>;
  handleSubmit: (onValid: SubmitHandler<any>) => (e?: React.BaseSyntheticEvent) => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

export const Form: FC<IFormProps> = ({
  className,
  children,
  action,
  onSubmit,
  handleSubmit,
  ...props
}) => (
  <form
    className={cnForm(null, [className])}
    action={action || '#'}
    onSubmit={handleSubmit(onSubmit)}
  >
    {children}
    <FormSubmit {...props} />
  </form>
);
