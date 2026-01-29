import { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import './Spinner2.scss';

// https://loading.io/css/
export const Spinner2: FC<IClassNameProps> = () => (
  <div className="Spinner2">
    <div></div>
    <div></div>
  </div>
);
