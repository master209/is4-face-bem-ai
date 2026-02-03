import React, { FC, MouseEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { classnames } from '@bem-react/classnames';
import { cn } from '@bem-react/classname';
import { Modal as YModal } from '../../lib/yandex-ui/Modal';

import {
  ModalCross,
  ModalHeader,
  ModalBody,
  ModalButtons
} from '.';
import { Button } from '../Button';
import { Color } from '../../const';

import './Modal.scss';

export const cnModal = cn('ModalBlock');

export interface IModalProps extends IClassNameProps {
  Body: FC<{}>;
  Header?: FC<{}>;
  Buttons?: {
    labelOk?: string;
    labelCancel?: string;
    handleModalOk: (ev: MouseEvent) => void;
  };
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<IModalProps> = ({
  Body,
  Header,
  Buttons,
  isVisible,
  setIsVisible,
}) => {

  const handleModalCancel = useCallback(() => setIsVisible(false), [setIsVisible]);

  return (
    <YModal
      theme="normal"
      onClose={handleModalCancel}
      visible={isVisible}
    >
      <div className={cnModal('')}>
        <div className={cnModal('Wrap')}>
          <ModalCross handleCrossOk={handleModalCancel}/>
          {Header &&
          <ModalHeader>
            <Header/>
          </ModalHeader>}

          <ModalBody>
            <Body/>
          </ModalBody>

          {Buttons &&
          <ModalButtons>
            <Button
              className={classnames('Color', Color.Warning)}
              onClick={Buttons.handleModalOk}
            >
              {Buttons.labelOk || 'Ok'}
            </Button>
            <Button
              className={classnames('Color', Color.Cancel)}
              onClick={handleModalCancel}
            >
              {Buttons.labelCancel || 'Отмена'}
            </Button>
          </ModalButtons>}
        </div>
      </div>
    </YModal>
  );
};
