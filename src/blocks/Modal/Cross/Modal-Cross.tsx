import React, { FC, MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Icon } from '../../Icon';
import { IMG_PATH } from '../../../const';

import './Modal-Cross.scss';

import { cnModal } from '..';

export interface IModalCrossProps extends IClassNameProps {
  handleCrossOk: (ev:MouseEvent) => void;
}

export const ModalCross: FC<IModalCrossProps> = ({handleCrossOk}) => (
  <span className={cnModal('Cross')}>
    <Icon
      src={`${IMG_PATH}cross.svg`}
      alt="close"
      onClick={handleCrossOk}
    />
  </span>
);
