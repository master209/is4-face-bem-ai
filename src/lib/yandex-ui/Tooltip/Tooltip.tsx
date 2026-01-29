import React, { FC, useEffect, useRef, useState } from 'react';
import { cn } from '@bem-react/classname';

import './Tooltip.scss';

const cnTooltip = cn('Tooltip');

export interface ITooltipProps {
  view?: 'default';
  size?: 's' | 'm';
  anchor?: React.RefObject<HTMLElement>;
  visible?: boolean;
  children?: React.ReactNode;
}

export const Tooltip: FC<ITooltipProps> = ({
  view = 'default',
  size = 'm',
  anchor,
  visible = false,
  children,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, position: 'bottom' as 'top' | 'bottom' | 'left' | 'right' });

  useEffect(() => {
    if (visible && anchor?.current && tooltipRef.current) {
      const anchorRect = anchor.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;
      let pos: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

      // Calculate position - prefer bottom, then top, left, right
      const bottomSpace = viewportHeight - anchorRect.bottom;
      const topSpace = anchorRect.top;
      const rightSpace = viewportWidth - anchorRect.right;
      const leftSpace = anchorRect.left;

      // Default to bottom
      if (bottomSpace >= tooltipRect.height + 10) {
        top = anchorRect.bottom + 5;
        left = anchorRect.left + (anchorRect.width / 2) - (tooltipRect.width / 2);
        pos = 'bottom';
      }
      // Try top
      else if (topSpace >= tooltipRect.height + 10) {
        top = anchorRect.top - tooltipRect.height - 5;
        left = anchorRect.left + (anchorRect.width / 2) - (tooltipRect.width / 2);
        pos = 'top';
      }
      // Try right
      else if (rightSpace >= tooltipRect.width + 10) {
        top = anchorRect.top + (anchorRect.height / 2) - (tooltipRect.height / 2);
        left = anchorRect.right + 5;
        pos = 'right';
      }
      // Try left
      else {
        top = anchorRect.top + (anchorRect.height / 2) - (tooltipRect.height / 2);
        left = anchorRect.left - tooltipRect.width - 5;
        pos = 'left';
      }

      // Keep within viewport bounds
      if (left < 10) left = 10;
      if (left + tooltipRect.width > viewportWidth - 10) {
        left = viewportWidth - tooltipRect.width - 10;
      }
      if (top < 10) top = 10;
      if (top + tooltipRect.height > viewportHeight - 10) {
        top = viewportHeight - tooltipRect.height - 10;
      }

      setPosition({ top, left, position: pos });
    }
  }, [visible, anchor]);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={tooltipRef}
      className={cnTooltip({
        size,
        view,
        position: position.position,
      })}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {children}
    </div>
  );
};