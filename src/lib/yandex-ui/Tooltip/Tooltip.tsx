import React, { FC, useEffect, useRef, useState } from 'react';
import { createPopper, Instance, Placement } from '@popperjs/core';
import { Portal } from '../Portal';

import './Tooltip.scss';

export interface ITooltipProps {
  view?: 'default';
  size?: 's' | 'm';
  theme?: 'dark' | 'light';
  anchor?: React.RefObject<HTMLElement>;
  visible?: boolean;
  children?: React.ReactNode;
}

export const Tooltip: FC<ITooltipProps> = ({
  view = 'default',
  size = 'm',
  theme = 'dark',
  anchor,
  visible = false,
  children,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [popperInstance, setPopperInstance] = useState<Instance | null>(null);
  const [placement, setPlacement] = useState<Placement>('bottom');

  // Initialize Popper when tooltip becomes visible and refs are available
  useEffect(() => {
    if (visible && anchor?.current && tooltipRef.current && !popperInstance) {
      const popper = createPopper(anchor.current, tooltipRef.current, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'right', 'left'],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
              padding: 8,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      });

      setPopperInstance(popper);

      // Update placement when popper updates
      const updatePlacement = () => {
        if (popper.state) {
          const currentPlacement = popper.state.placement as Placement;
          setPlacement(currentPlacement);
        }
      };

      // Set initial placement
      updatePlacement();
    }

    // Cleanup when tooltip becomes invisible
    if (!visible && popperInstance) {
      popperInstance.destroy();
      setPopperInstance(null);
    }
  }, [visible, anchor, popperInstance]);

  useEffect(() => {
    if (popperInstance && tooltipRef.current) {
      popperInstance.update();
    }
  }, [children, popperInstance]);

  if (!visible) {
    return null;
  }

  const tooltipContent = (
    <div
      ref={tooltipRef}
      className={`Popup2 Popup2_target_anchor Popup2_view_default Tooltip Tooltip_size_${size} Tooltip_view_${view} Tooltip_theme_${theme}`}
      data-popper-placement={placement}
      style={{ position: 'absolute', zIndex: 1000 }}
    >
      <div role="tooltip" className="Tooltip-Content">
        {children}
      </div>
      <div className="Tooltip-Backdrop"></div>
    </div>
  );

  return <Portal>{tooltipContent}</Portal>;
};