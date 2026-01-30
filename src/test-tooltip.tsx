// Test component to verify Tooltip HTML structure
import React, { useState, useRef } from 'react';
import { Tooltip } from '@yandex-ui/Tooltip';

const TestTooltip = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ padding: '100px' }}>
      <button
        ref={buttonRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover me for tooltip
      </button>

      <Tooltip
        anchor={buttonRef}
        visible={visible}
        size="m"
        view="default"
      >
        Test tooltip content
      </Tooltip>
    </div>
  );
};

export default TestTooltip;