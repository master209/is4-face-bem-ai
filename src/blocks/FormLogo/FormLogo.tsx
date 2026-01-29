import { FC} from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import { Img } from '../Img';
import { IMG_PATH } from '../../const';

import './FormLogo.scss';

export const cnFormLogo = cn('FormLogo');

export const FormLogo: FC<IClassNameProps> = () => (
  <div className={cnFormLogo()}>
    <Img src={`${IMG_PATH}logo.png`} alt="logo"/>
    <span className={cnFormLogo('Label')}>Галс-Телеком</span>
  </div>
);
