import { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './Clear.scss';

export const cnClear = cn('Clear');

export const Clear: FC<IClassNameProps> = ({className}) => (
  <div className={cnClear(null, [className])}>&nbsp;</div>
);
