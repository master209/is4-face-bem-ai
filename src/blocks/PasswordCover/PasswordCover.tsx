import React, { FC } from 'react';

import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './PasswordCover.scss';

export const cnPasswordCover = cn('PasswordCover');

// маскировочные символы для защиты пароля от посторонних глаз
export const PasswordCover: FC<IClassNameProps> = () => (
  <span className={cnPasswordCover()}>
    &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
  </span>
);
