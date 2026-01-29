import React, { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';

import './Modal.scss';

const cnModal = cn('Modal');

export interface IModalProps {
  theme?: 'normal';
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal: FC<IModalProps> = ({
  theme = 'normal',
  visible = false,
  onClose,
  children,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible && onClose) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [visible, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={cnModal()} onClick={handleBackdropClick}>
      <div className={cnModal('Content', { theme })}>
        {children}
      </div>
    </div>
  );
};