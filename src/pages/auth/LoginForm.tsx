import { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Form } from '../../blocks/Form';
import { InputText, withInputTextTypePasswordAuth } from '../../blocks/InputText';
import { fetchUsername } from '../../store/api-actions';
import { AuthData } from '../../types/user-data';
import { useAppDispatch, useAppSelectors } from '../../hooks';
import { FormError, TITLE_FREFIX } from '../../const';

import './LoginForm.scss';

export const cnLoginForm = cn('LoginForm');
export type FormValues = AuthData;

const InputTextTypePassword = withInputTextTypePasswordAuth(InputText);

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {serverErrors} = useAppSelectors();

  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    getValues,
  } = useForm<FormValues>({mode: 'onTouched'});

  useEffect(() => {
    serverErrors &&
    Object.entries(serverErrors).map(([field, message]) =>
      setError(field as keyof FormValues, { type: 'custom', message: message })
    );
  }, [setError, serverErrors]);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => dispatch(fetchUsername(data));

  return (
    <div className={cnLoginForm(null, ['Form'])}>
      <h1>Вход в ИС4</h1>
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <InputText
          useFormProps = {{register, errors, getValues}}
          name="username"
          icon="user"
          placeholder="Логин"
          required
          validators={{
            required: FormError.Required
          }}
          error={errors.username?.message}
        />
        <InputTextTypePassword
          useFormProps = {{register, errors, getValues}}
          modtype="password"
        />
      </Form>
    </div>
  );
}
