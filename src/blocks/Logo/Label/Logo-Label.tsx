import { FC} from 'react';
import { IClassNameProps } from '@bem-react/core';

import { cnLogo } from '../../Logo';

import './Logo-Label.scss';

interface ILogoLabelProps extends IClassNameProps {
  label?: string;
}

export const LogoLabel: FC<ILogoLabelProps> = ({className, label}) => (
  <span className={cnLogo('Label')}>
    {label}
  </span>
);
