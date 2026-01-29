import React, { FC, ChangeEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnBank } from '..';
import { Attach } from '../../../../../blocks/Attach';

import './File-Attach.scss';

export interface IAttachProps extends IClassNameProps {
  name: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export const FileAttach: FC<IAttachProps> = ({name, onChange}) => (
  <Attach
    hasHolder
    holderText="файл не выбран"
    view="default"
    size="m"
    name={name}
    className={cnBank('Attach')}
    onChange={onChange}
  >
    Выберите файл
  </Attach>
);
