import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface IPortalProps {
  children?: ReactNode;
  container?: Element;
}

export const Portal: FC<IPortalProps> = ({
  children,
  container = document.body,
}) => {
  return createPortal(children, container);
};