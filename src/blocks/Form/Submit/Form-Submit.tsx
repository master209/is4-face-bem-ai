import { FC} from 'react';
import { IClassNameProps } from '@bem-react/core';

import { SubmitButton } from '../../SubmitButton/SubmitButton';
import { cnForm } from '../Form';

import './Form-Submit.scss';

interface IFormSubmitProps extends IClassNameProps {
  submitLabel?: string;
  submitDisabled?: boolean;
}

export const FormSubmit: FC<IFormSubmitProps> = ({
  className,
  submitLabel,
  submitDisabled,
  ...props
}) => (
  <SubmitButton
    className={cnForm('Submit')}
    disabled={submitDisabled}
    {...props}
  >
    {submitLabel || 'Войти'}
  </SubmitButton>
);
